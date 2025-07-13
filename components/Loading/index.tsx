import { Text, View, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Theme } from '@react-navigation/native'
import { theme } from '@/constants/theme'


type Props = PressableProps &({
    size: number
    color?: string 
})


export function Loading ({ size,color = theme.colors.dark, ...rest }:Props)  {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}
