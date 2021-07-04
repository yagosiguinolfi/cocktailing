import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStacknavigator } from '@react-navigation/stack';

import App from './src';
import Categories from './src/pages/Categories';
import Drinks from './src/pages/Drinks';
import Details from './src/pages/Details';

const Stack = createStacknavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#444444',
    primary: '#550044',
    accent: '#ddaa00',
  }
};

export default function Main() {
  return (
    <StoreProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Naviagtor initialRouteName='App'>
            <Stack.Screen name='App' component={App}/>
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='Drinks' component={Drinks}/>
            <Stack.Screen name='Details' component={Details}/>
          </Stack.Naviagtor>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
