import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AuthRoutes from './app.auth';
import AppRoutes from './app.routes';

function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;
