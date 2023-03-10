import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { Text } from '../../components/Text';
import AuthContext from '../../contexts/auth';

function Main() {
  const { signed, logout } = useContext(AuthContext);

  console.log(signed);

  async function handleLogout() {
    logout();
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Estamos logados</Text>
      <Button title='Sair' onPress={handleLogout} />
    </View>
  );
}

export default Main;
