import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Searchbar, Card, Button, ActivityIndicator } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const initialState = {
  drink: {},
  searchQuery: '',
  searching: false
};

function Test({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onChangeSearch = query => setState({ ...state, searchQuery: query });

  const [state, setState] = useState(initialState);
  const [searching, setSearching] = useState(false);


  // useEffect(() => {
  // api.get(`search.php?s=${state.searchQuery}`)
  //     .then(async function (response) {
  //        setState( {...state, drink: response.data.drinks[0].strDrink})})
  //        .catch(function (error) {
  //         console.log('Erro:', error)
  //       });
  //   }, []);


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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Cocktailing</Text>
        </View>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={state.searchQuery}
          // icon='search-web'
          iconColor='#550033'
          onIconPress={searchByName}
          onEndEditing={searchByName}
        />
        <Card style={{ width: '80%', minHeight: 70, }}>
          {searching ?
            <ActivityIndicator animating={searching} color={Colors.red800} />
            :
            <><Text>ID: {state.drink?.idDrink || 'notthing'}</Text>
              <Text>Name: {state.drink?.strDrink || 'notthing'}</Text></>}
        </Card>
        <Button onPress={()=>navigation.navigate('Categories')}>Categories</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Test;
