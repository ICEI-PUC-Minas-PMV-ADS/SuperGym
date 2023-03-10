import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../pages/Index';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
      <AuthStack.Screen name="Main" component={Main} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
