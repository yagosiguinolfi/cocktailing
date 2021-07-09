import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView, Title, Container, Card, CardTitle, Image } from '../../styles';
import api from '../../services/api';
import { ViewImage, ViewIngredients, Text, ViewnInstructions } from './styles';



function Details({ navigation, route }) {

  const [details, setDetails] = useState({});
  const { drink } = route.params;

  useEffect(() => {
    api.get(`search.php?s=${drink}`)
      .then(async function (response) {
        setDetails(response.data.drinks[0])
        console.log(array);
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function renderIngredient(i) {
    console.log('ingr > ', details?.[`strIngredient${i+1}`]);
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#11aa11' }}>
        {/* <Text>{details?.${`strIngredient${i+1}`}}</Text> */}
        <Text>{details?.strMeasure1}</Text>
      </View>
    );

  }
  function renderDetails() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#1111aa' }}>
        <CardTitle>{details?.strDrink}</CardTitle>
        <View style={{ flex: 0.6, flexDirection: 'row', backgroundColor: '#11aa11' }}>
          <ViewIngredients>
            <Text>Ingredients</Text>
            {/* {array.map(item => itemrenderIngredient(1)} */}
            <Text>{details?.strMeasure1}</Text>
            <Text>{details?.strIngredient1}</Text>
            <Text>{details?.strMeasure2}</Text>
            <Text>{details?.strIngredient2}</Text>
            <Text>{details?.strMeasure3}</Text>
            <Text>{details?.strIngredient3}</Text>
            <Text>{details?.strMeasure4}</Text>
            <Text>{details?.strIngredient4}</Text>
            <Text>{details?.strMeasure5}</Text>
            <Text>{details?.strIngredient5}</Text>
            <Text>{details?.strMeasure6}</Text>
            <Text>{details?.strIngredient6}</Text>
            <Text>{details?.strMeasure7}</Text>
            <Text>{details?.strIngredient7}</Text>
            <Text>{details?.strMeasure8}</Text>
            <Text>{details?.strIngredient8}</Text>
            <Text>{details?.strMeasure9}</Text>
            <Text>{details?.strIngredient9}</Text>
            <Text>{details?.strMeasure10}</Text>
            <Text>{details?.strIngredient10}</Text>
            <Text>{details?.strMeasure11}</Text>
            <Text>{details?.strIngredient11}</Text>
            <Text>{details?.strMeasure12}</Text>
            <Text>{details?.strIngredient12}</Text>
            <Text>{details?.strMeasure13}</Text>
            <Text>{details?.strIngredient13}</Text>
            <Text>{details?.strMeasure14}</Text>
            <Text>{details?.strIngredient14}</Text>
            <Text>{details?.strMeasure15}</Text>
            <Text>{details?.strIngredient15}</Text>
          </ViewIngredients>
          <ViewImage>
            <Image source={{ uri: `${details?.strDrinkThumb}/preview` }} />
          </ViewImage>
        </View>
        <ViewnInstructions style={{  flex: 0.4, backgroundColor: '#ff06f1' }}>
          <Text>{details?.strInstructions}</Text>
        </ViewnInstructions>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Container>
        <Title>Detalhes do seu drink</Title>
        <ScrollView style={{ width: '100%' }}>
          <View style={{ width: '100%', paddingTop: 20, backgroundColor: '#aa111a' }}>
            {renderDetails()}
          </View></ScrollView>
      </Container>
    </SafeAreaView>
  );

}

export default Details;