import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './src/pages/Menu';
import Categories from './src/pages/Categories';
import Drinks from './src/pages/Drinks';
import Details from './src/pages/Details';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name='Menu' component={Menu} params={{}}/>
        <Stack.Screen name='Categories' component={Categories} params={{}}/>
        <Stack.Screen name='Drinks' component={Drinks}  params={{}}/>
        <Stack.Screen name='Details' component={Details}  params={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
