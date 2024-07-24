import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { useColorScheme } from 'react-native'
import { TamaguiProvider } from 'tamagui'

import appConfig from '../tamagui.config'

export default function RootLayout() {
    const colorScheme = useColorScheme()

    return (
        <TamaguiProvider config={appConfig} defaultTheme={colorScheme!}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Slot />
            </ThemeProvider>
        </TamaguiProvider>
    )
}