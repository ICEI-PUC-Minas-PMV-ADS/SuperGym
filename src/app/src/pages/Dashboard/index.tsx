import React from 'react';
import { View, Button } from 'react-native';

import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function Dashboard() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title='Login / Cadastre-se' onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
}

export default Dashboard;
