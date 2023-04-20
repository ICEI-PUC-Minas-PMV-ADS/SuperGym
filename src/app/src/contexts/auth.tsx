import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api, { USER_AUTH } from '../services/api';

import { createContext } from 'react';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn: (loginProps: LoginProps) => Promise<void>;
  logout(): void;
  loading: boolean | null;
}

interface Props {
  children: JSX.Element;
}

interface LoginProps {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('Supergym:user');
      const storagedToken = await AsyncStorage.getItem('Supergym:token');

      if (storagedToken && storagedUser) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
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
    const token = json.user.token;

    setUser(user);

    //  api.defaults.headers['Authorization'] = `Bearer ${token}`;

    await AsyncStorage.setItem('Supergym:user', JSON.stringify(user));
    await AsyncStorage.setItem('Supergym:token', token);

    setLoading(false);
  }

  function logout() {
    AsyncStorage.clear().then(() => setUser(null));
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
