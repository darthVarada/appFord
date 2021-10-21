//Essential index page for other screens 

import React from 'react'
import { useRoute } from '@react-navigation/core'
import { Text } from 'react-native'

export default function Home({navigation}){
    function handleDetail(){
        navigation.navigate('Detalhes', {})
    }
// return test 
    return (
        <view>
            <Text>Lulz</Text>
            <Text>Foto de carro fdc</Text>
            <Image
                source={{uri: 'https://www.ford.com.br/content/ford/br/pt_br/home/picapes/ranger/_jcr_content/par/splitter/splitter1/image/image.imgs.full.high.jpg/1595437737443.jpg'}}/>
        </view>
    )
}