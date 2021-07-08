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
import menuStyles from './styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const initialState = {
  drink: { temp: 'vazio' },
  searchQuery: '',
  searching: false,
  sugestions: 8
};


function Menu({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  const onChangeSearch = query => setState({ ...state, searchQuery: query });

  const [state, setState] = useState(initialState);
  const [searching, setSearching] = useState(false);


  // useEffect(() => {
  //   api.get(`random.php`)
  //     .then(async function (response) {
  //       await setState({ ...state, drink: response.data.drinks[0] }, console.log(state.drink))

  //     })
  //     .catch(function (error) {
  //       console.log('Erro:', error)
  //     });
  // }, []);

  function randomize() {
    api.get(`random.php`)
      .then(async function (response) {
        await setState({ ...state, drink: response.data.drinks[0] }, console.log(state.drink))

      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }

  function renderSugestions() {
    Array.from(Array(8), (e, i) => {
      randomize();
      renderCard({ index: e });
    });
  }

  function renderCard(index) {
    randomize();
    return (
      <View key={index}>
        <Image source={{ uri: '../../assets/images/logo.png' }} />
        {/*<Image source={{ uri: `${state.drink?.strDrinkThumb}` }} />*/}
        <Text>Name: {state.drink?.strDrink || 'notthing'}</Text>
      </View>
    )
  }

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
        <View style={[menuStyles.view, menuStyles.row, menuStyles.wrap]}>{/*style={{ width: '100%', alignItems: 'center', justifyContent: 'space-around'}}*/}
          <Card style={[menuStyles.card]}>
            {searching ?
              <ActivityIndicator animating={searching} color={Colors.red800} />
              :
              { renderCard() }
            }
          </Card>
        </View>
        <Button onPress={() => navigation.navigate('Categories')}>Categories</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
