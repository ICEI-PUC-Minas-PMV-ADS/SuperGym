import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  const navigation = useNavigation();
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard" >
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="SignIn" component={SignIn} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
