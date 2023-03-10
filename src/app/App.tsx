import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

import { AuthProvider } from './src/contexts/auth';

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
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

