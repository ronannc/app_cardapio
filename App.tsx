import {Home} from "./src/screens/Home";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from "styled-components";
import THEME from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  
  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
  );
}
