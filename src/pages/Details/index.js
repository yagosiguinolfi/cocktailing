import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';



function Details() {

    // const [details, setDetails] = useState();

    // useEffect(() => {
    //     api.get(`list.php?c=list`)
    //         .then(async function (response) {
    //             setCategories(response.data.drinks)
    //         })
    //         .catch(function (error) {
    //             console.log('Erro:', error)
    //         });
    // }, []);

    return (
        <SafeAreaView>
            {/* {details?.map(item => {
                <Button>{item.strDetails}</Button>
            })} */}
        </SafeAreaView>
    );

}

export default Details;