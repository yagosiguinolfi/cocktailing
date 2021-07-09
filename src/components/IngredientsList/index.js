import React from 'react';
import { View } from 'react-native';
import { Text } from '../../pages/Details/styles';

function IngredientsList({ details }) {
  return (
    <>
      {details.strIngredient1 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure1} - ${details.strIngredient1}`}</Text>
        </View>
        : <></>}
      {details.strIngredient2 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure2} - ${details.strIngredient2}`}</Text>
        </View>
        : <></>}
      {details.strIngredient3 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure3} - ${details.strIngredient3}`}</Text>
        </View>
        : <></>}
      {details.strIngredient4 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure4} - ${details.strIngredient4}`}</Text>
        </View>
        : <></>}
      {details.strIngredient5 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure5} - ${details.strIngredient5}`}</Text>
        </View>
        : <></>}
      {details.strIngredient6 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure6} - ${details.strIngredient6}`}</Text>
        </View>
        : <></>}
      {details.strIngredient7 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure7} - ${details.strIngredient7}`}</Text>
        </View>
        : <></>}
      {details.strIngredient8 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure8} - ${details.strIngredient8}`}</Text>
        </View>
        : <></>}
      {details.strIngredient9 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure9} - ${details.strIngredient9}`}</Text>
        </View>
        : <></>}
      {details.strIngredient10 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure10} - ${details.strIngredient10}`}</Text>
        </View>
        : <></>}
      {details.strIngredient11 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure11} - ${details.strIngredient11}`}</Text>
        </View>
        : <></>}
      {details.strIngredient12 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure12} - ${details.strIngredient12}`}</Text>
        </View>
        : <></>}
      {details.strIngredient13 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure13} - ${details.strIngredient13}`}</Text>
        </View>
        : <></>}
      {details.strIngredient14 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure14} - ${details.strIngredient14}`}</Text>
        </View>
        : <></>}
      {details.strIngredient15 !== null ?
        <View style={{ flexDirection: 'row' }}>
          <Text>{`${details.strMeasure15} - ${details.strIngredient15}`}</Text>
        </View>
        : <></>}
    </>
  );
}

export default IngredientsList;