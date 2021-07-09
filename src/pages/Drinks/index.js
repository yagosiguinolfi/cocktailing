import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, Title, Container, CardTitle, Image, Content } from '../../styles';
import { Card } from './styles';
import { colors } from '../../utils/colors';
import api from '../../services/api';
import { ActivityIndicator } from 'react-native-paper';


function Drinks({ navigation, route }) {

  const [drinks, setDrinks] = useState([]);
  const { category } = route.params;

  useEffect(() => {
    api.get(`filter.php?c=${category}`)
      .then(async function (response) {
        setDrinks(response.data.drinks)
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function renderDrink({ item, index }) {
    return (
      <Card
        key={index}
        color={colors.opaque}
        onPress={() => navigation.navigate({ name: 'Details', params: { drink: item?.strDrink } })}>
        <CardTitle>{item?.strDrink}</CardTitle>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: `${item?.strDrinkThumb}/preview` }} />
        </View>
      </Card>
    );
  }

  return (
    <SafeAreaView>
      <Container>
        <Title>Escolha um drink:</Title>
        {drinks ?
          <ScrollView style={{width:'100%'}}>
            <Content>
              {drinks.map((item, index) =>
                renderDrink({ item, index }))}
            </Content>
          </ScrollView>
          : <><ActivityIndicator animating={searching} color={colors.white} /></>}
      </Container>
    </SafeAreaView>
  );
}

export default Drinks;