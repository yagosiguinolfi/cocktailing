import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, Title, Container, Card, CardTitle } from '../../styles';
import api from '../../services/api';
import CardCategory from '../../components/CardCategory';
import { colors } from '../../utils/colors';
import { ActivityIndicator } from 'react-native-paper';

function Categories({ navigation }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get(`list.php?c=list`)
      .then(async function (response) {
        setCategories(response.data.drinks)
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function renderCategory({ item, index }) {
    return (
      <CardCategory
        key={index}
        category={item?.strCategory}
        navigation={navigation}
        color={colors.opaque} />
    );
  }

  return (
    <SafeAreaView>
      <Container>
        <Title>Escolha uma categoria de drink:</Title>
        {categories ?
          <ScrollView style={{width:'100%'}}>
            <View style={{ paddingTop: 20 }}>
              {categories.map((item, index) =>
                renderCategory({ item, index })
              )}
            </View></ScrollView> : <ActivityIndicator animating={searching} color={colors.white}/>}
      </Container>
    </SafeAreaView>
  );

}

export default Categories;