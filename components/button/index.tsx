import { Text, View, Pressable, PressableProps } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Loading } from '../Loading'

type Props = PressableProps &({
    title: string
    loading: false
    hasShadow: true
})




export function Button ({ title,hasShadow,loading, ...rest }:Props)  {
  if(loading){  
    return(
      <View style={[styles.button, styles.buttonStyle, hasShadow && {backgroundColor:"#ffffff"}]}>
        <Loading
        size={14}/>
      </View>
    )
  }
  return (
    

    <Pressable style={[styles.button, styles.buttonStyle, hasShadow && styles.shadowStyle]}>
        <Text style={[styles.text, styles.textStyle]}> 
            {title}
        </Text>
    </Pressable>
  )
}


