import React, { useContext } from 'react';
import { View, Button } from 'react-native';

import AuthContext from '../../contexts/auth';

function SignIn() {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Login" onPress={handleSignIn} />
    </View>
  );
}

export default SignIn;
