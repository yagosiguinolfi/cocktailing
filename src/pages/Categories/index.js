import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import api from '../../services/api';

function Categories({navigation}) {

    const [categories, setCategories] = useState();

    useEffect(() => {
        api.get(`list.php?c=list`)
            .then(async function (response) {
                setCategories(response.data.drinks)
            })
            .catch(function (error) {
                console.log('Erro:', error)
            });
    }, []);

    return (
        <SafeAreaView>
            {categories?.map(item => {
                <Button>{item.strCategory}</Button>
            })}
        </SafeAreaView>
    );

}

export default Categories;