import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../pages/Dashboard';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="SignIn" component={Dashboard} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
