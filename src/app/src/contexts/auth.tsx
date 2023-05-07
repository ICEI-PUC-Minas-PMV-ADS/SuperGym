import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api, { USER_AUTH, USER_CREATE } from '../services/api';

import { createContext } from 'react';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn: (loginProps: LoginProps) => Promise<void>;
  create: (createUserProps: CreateUserProps) => Promise<void>;
  logout(): void;
  loading: boolean | null;
  error: string;
}

interface Props {
  children: JSX.Element;
}

interface LoginProps {
  email: string;
  password: string;
}

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('Supergym:user');
      const storagedToken = await AsyncStorage.getItem('Supergym:token');

      if (!storagedUser) setLoading(false);

      if (storagedToken && storagedUser) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
        setError('');
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn({ email, password }: LoginProps) {
    const { url, options } = USER_AUTH({ email, password });
    const response = await fetch(url, options);
    const json = await response.json();

    const user = json.user;
    const token = user ? user.token : undefined;

    if (response.ok) {
      setUser(user);
      navigation.navigate('Main');
      await AsyncStorage.setItem('Supergym:user', JSON.stringify(user));
      await AsyncStorage.setItem('Supergym:token', token);
      setError('');
      setLoading(false);
    } else {
      setError(json.message);
    }

  }

  async function create({ name, email, password }: CreateUserProps) {
    const { url, options } = USER_CREATE({ name, email, password });
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) {
      navigation.navigate('SignIn');
      setLoading(false);
      setError('');
    } else {
      setError(json.message);
    }
  }

  function logout() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, create, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
