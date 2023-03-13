import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

import * as auth from '../services/auth';
import { createContext } from 'react';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  logout(): void;
  loading: boolean | null;
}

interface Props {
  children: JSX.Element;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);

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

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

    await AsyncStorage.setItem('Supergym:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('Supergym:token', JSON.stringify(response.token));

    console.log(response);
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
