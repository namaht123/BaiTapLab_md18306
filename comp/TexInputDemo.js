import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const TextInputDemo = (props) => {
 return (
  <TextInput {...props}
   style = {[props.style, st.input]}
   placeholderTextColor={props.placeholderTextColor || '#000'}
  />
 )
}


export default TextInputDemo


const st = StyleSheet.create({
   input:{
       padding:10,
       borderWidth: 1,
       borderColor: '#000',
       marginLeft:18,
       marginRight:18,
       borderRadius:10,
       backgroundColor:'#eee'
   }
})
