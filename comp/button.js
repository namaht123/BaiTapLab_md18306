import { View, Text, TouchableOpacity } from 'react-native'
import React, {forwardRef} from 'react'



const button = forwardRef(  ({styles, onPress, children},ref) => {
  return (
      <TouchableOpacity
          onPress={onPress} ref={ref}
          style={[styles, st.nutbam]}
      >
          <Text style={st.text}>{children}</Text>
      </TouchableOpacity>
  )
  }
);


export default button
const st = StyleSheet.create({
  nutbam:{
      backgroundColor: 'yellow',
      padding: 10, borderRadius: 10,
      maxWidth:100
  },
  text:{ color: 'red'}
})
