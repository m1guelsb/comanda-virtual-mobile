import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Home } from '@/screens';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Poppins-400': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-500': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-700': require('./src/assets/fonts/Poppins-Bold.ttf'),
  });

  if (!isFontsLoaded) return null;

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />
        <Home />
      </QueryClientProvider>
    </>
  );
}
