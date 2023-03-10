import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from './src/components/Text';


export default function App() {
  const [isFontsLoaded] = useFonts({
    'Poppins-400': require('./src/assets/fonts/Poppins-Regular.otf'),
    'Poppins-600': require('./src/assets/fonts/Poppins-SemiBold.otf'),
    'Poppins-700': require('./src/assets/fonts/Poppins-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text color="#25C26E" weight="600" size={22}>Setup Inicial - Supergym</Text>
      <Text color="#333" weight="400" size={16}>Componente de texto criado</Text>
      <Text color="#333" weight="400" size={16}>Hello world!</Text>
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
