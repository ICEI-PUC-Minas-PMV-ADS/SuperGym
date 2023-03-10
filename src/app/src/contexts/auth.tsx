import React from 'react';
import * as auth from '../services/auth';
import { createContext } from 'react';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }) {
  async function signIn() {
    const response = await auth.signIn();

    console.log(response);
  }

  return (
    <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
