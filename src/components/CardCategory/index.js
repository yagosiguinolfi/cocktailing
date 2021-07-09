import React from 'react';
import { Card, CardTitle } from '../../styles';

function CardCategory({ category, navigation, color }) {
  return (
    <Card 
    color={color}
    onPress={() => navigation.navigate({ name: 'Drinks', params: { category } })}>
      <CardTitle>{category}</CardTitle>
    </Card>
  );
}

export default CardCategory;