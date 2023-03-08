import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  const [isFontsLoaded] = useFonts({
    'Poppins-400': require('./src/assets/fonts/Poppins-Regular.otf'),
    'Poppins-500': require('./src/assets/fonts/Poppins-SemiBold.otf'),
    'Poppins-600': require('./src/assets/fonts/Poppins-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Poppins-600' }}>Fontes configuradas com sucesso!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
