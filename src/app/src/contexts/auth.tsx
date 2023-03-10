import React, { useState } from 'react';
import * as auth from '../services/auth';
import { createContext } from 'react';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    console.log(response);
  }

  async function logout() {
    const response = await auth.signIn();

    setUser(null);

    console.log(response);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
