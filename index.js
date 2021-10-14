/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'; // Navigation
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/Navigation/App';
import {
  configureFonts,
  DarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {name as appName} from './app.json';
import {appDark, appRed, appYellow} from './src/Styles/Styles';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'menlo',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'monospace',
      fontWeight: 'normal',
    },
  },
};

// Colors Themes
const dark = {
  ...DarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DarkTheme.colors,
    primary: appYellow, // Botones y Detalles
    background: appDark, // Fondo
    surface: appDark, // Surfaces
    onSurface: appDark, // SnackBar
  },
};

// Envolventes Paper y Navigation
export default function King() {
  return (
    <NavigationContainer>
      <PaperProvider theme={dark}>
        <App />
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => King);
