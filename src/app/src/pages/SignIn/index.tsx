import React from 'react';
import { View, Button } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function SignIn() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

export default SignIn;
