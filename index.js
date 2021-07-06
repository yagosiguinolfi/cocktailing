import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';

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
       <App/>
      </PaperProvider>
    </StoreProvider>
  );
}
AppRegistry.registerComponent(appName, () => App);
