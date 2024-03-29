import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto'

import {Background} from "./src/components/Background";
import {StatusBar} from "react-native";
import {Loading} from "./src/components/Loading";
import {ThemeProvider} from "styled-components/native";
import Theme from "./src/theme"
import {Routes} from "./src/routes";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    return (
        <ThemeProvider theme={Theme}>
            <Background>
                <StatusBar barStyle="light-content" backgroundColor="transparent"
                           translucent></StatusBar>
                {fontsLoaded ? <Routes/> : <Loading/>}
            </Background>
        </ThemeProvider>
    );
}
