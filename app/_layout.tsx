import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouteInfo } from 'expo-router/build/hooks';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync()
  const colorScheme = useColorScheme();
  const router = useRouteInfo()

  console.log(router.pathname)

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="setting/profile" options={{ headerShown: false }} />
          <Stack.Screen name="setting/password" options={{ headerShown: false }} />
          <Stack.Screen name="setting/delete" options={{ headerShown: false }} />
          <Stack.Screen name="ai" options={{ headerShown: false }} />
          <Stack.Screen name="upload" options={{ headerShown: false }} />
          <Stack.Screen name="problem" options={{ headerShown: false }} />
          <Stack.Screen name="saved/index" options={{ headerShown: false }} />
          <Stack.Screen name="saved/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="(messaging)/directMessage/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="(messaging)/groupChat/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
