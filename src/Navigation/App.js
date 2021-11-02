/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'; // Navigation
import * as React from 'react';
import {Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {appDark} from '../Styles/Styles';
import MainScreen from '../Screens/MainScreen';
import ListSongs from '../Screens/ListSongs';
import ListDownloads from '../Screens/ListDownloads';

// Se crea Stack
const Stack = createStackNavigator();

// Se crean rutas del Stack
function App() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        ...Platform.select({
          // Personalizador de Dispositivo
          ios: {
            headerStyle: {
              backgroundColor: 'appDark',
              height: 100,
              elevation: 0,
              //shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
          },
          android: {
            headerStyle: {
              backgroundColor: appDark,
              height: 65,
              elevation: 0,
              //shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
          },
        }),
        cardStyle: {backgroundColor: appDark},
      }}>
      <Stack.Screen // Cambio de Pantallas
        name="MainScreen"
        component={MainScreen}
        // title: 'App Name'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ListSongs"
        component={ListSongs}
        options={{
          title: 'Resultados',
        }}
      />
      <Stack.Screen
        name="ListDownloads"
        component={ListDownloads}
        options={{
          title: 'Mis Descargas',
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
