//Essential index page for other screens 

import React from 'react'
import { useRoute } from '@react-navigation/core'
import { Text } from 'react-native'

export default function Home({navigation}){
    function handleDetail(){
        navigation.navigate('Detalhes', {})
    }

    return (
        <view>
            <Text>Lulz</Text>
        </view>
    )
}