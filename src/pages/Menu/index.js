import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {  Button } from 'react-native-paper';
import {  SafeAreaView, Container, Image, Title } from '../../styles';

const initialState = {
  drink: { temp: 'vazio' },
  searchQuery: '',
  searching: false,
  sugestions: 8
};

function Menu({ navigation }) {

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
    <SafeAreaView>
      <Container>
        <Button onPress={() => navigation.navigate('Categories')}><Title>Categories</Title></Button>
      </Container>
    </SafeAreaView>
  );
};

export default Menu;
