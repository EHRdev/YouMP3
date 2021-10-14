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
              shadowColor: 'transparent',
            },
          },
          android: {
            headerStyle: {
              backgroundColor: 'appDark',
              height: 60,
              elevation: 0,
              shadowColor: 'transparent',
            },
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
          headerTitle: props => (
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 50,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              /*source={require('../Media/Front_App_Logo.png')}*/
            />
          ),
        }}
      />
      <Stack.Screen
        name="ListSongs"
        component={ListSongs}
        options={{
          title: 'Resultados',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ListDownloads"
        component={ListDownloads}
        options={{
          title: 'Mis Descargas',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default App;
