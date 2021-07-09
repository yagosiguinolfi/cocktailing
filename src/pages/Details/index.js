import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView, Title, Container, Card, CardTitle } from '../../styles';
import api from '../../services/api';
import { ViewImage, ViewIngredients, Text, ViewInstructions, Image } from './styles';
import IngredientsList from '../../components/IngredientsList';

function Details({ navigation, route }) {

  const [details, setDetails] = useState({});
  const { drink } = route.params;

  useEffect(() => {
    api.get(`search.php?s=${drink}`)
      .then(async function (response) {
        setDetails(response.data.drinks[0])
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function renderIngr() {
    return (
      <IngredientsList details={details} />
    );
  }

  function renderDetails() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'nowrap' }}>
        <View style={{ flex: 0.5, flexDirection: 'row' }}>
          <ViewIngredients>
            <Text style={{ fontWeight: 'bold', fontSize: 16, paddingBottom: 10 }}>Ingredients</Text>
            {renderIngr()}
          </ViewIngredients>
          <ViewImage>
            <View style={{ width: '100%', height: 'auto' }}>
              <Image source={{ uri: `${details?.strDrinkThumb}/preview` }} />
            </View>
          </ViewImage>
        </View>
        <ViewInstructions>
          <Text style={{ height: 20 }}>{details.strInstructions}</Text>
        </ViewInstructions>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Container style={{ flex: 1 }}>
        <CardTitle>{details?.strDrink}</CardTitle>
        {/* <Title>Detalhes do seu drink</Title> */}
        <ScrollView style={{ width: '100%' }}>
          <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
            {renderDetails()}
          </View>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );

}

export default Details;