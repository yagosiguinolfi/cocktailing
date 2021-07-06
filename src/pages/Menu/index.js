import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { Image } from '../../styles';
import { Searchbar, Card, Button, ActivityIndicator } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const initialState = {
  drink: {temp:'vazio'},
  searchQuery: '',
  searching: false
};


function Menu({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onChangeSearch = query => setState({ ...state, searchQuery: query });

  const [state, setState] = useState(initialState);
  const [searching, setSearching] = useState(false);


  useEffect(() => {
    api.get(`random.php`)
      .then(async function (response) {
        await setState({ ...state, drink: response.data.drinks[0] }, console.log(state.drink))

      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);


  function searchByName() {
    setSearching(true);
    api.get(`search.php?s=${state.searchQuery}`)
      .then(async function (response) {
        setState({ ...state, drink: response.data.drinks[0] })
        setSearching(false)
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <Card style={{ width: '80%', minHeight: 70 }}>
          {searching ?
            <ActivityIndicator animating={searching} color={Colors.red800} />
            :
            <>
              {console.log('image >> ', state.drink?.strDrinkThumb)}
              <Image source={{ uri: `${state.drink?.strDrinkThumb}` }} />
              <Text>Name: {state.drink?.strDrink || 'notthing'}</Text>
            </>}
        </Card>
        <Button onPress={() => navigation.navigate('Categories')}>Categories</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
