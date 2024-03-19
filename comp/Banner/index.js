import { Image, Text, View } from 'react-native'
import React from 'react'
import style from './style'

const index = ({ uri_img,}) => {
    return (
        <View style={style.khung}>
            <Image source={{ uri: uri_img }} style={style.anh} />
            
        </View>
    )
}

export default index

