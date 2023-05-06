import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';



const AppStack = createNativeStackNavigator();

function AppRoutes() {

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard" >
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="Register" component={Register} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
