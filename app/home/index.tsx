import { View, Text, Button } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router"
import { ScreenContentWrapper } from 'react-native-screens'

    const index = () => {

    const router = useRouter()

  return (
    <ScreenContentWrapper >
    <View>
      
      <Text>Olá mundo</Text>
      <Button title='Welcome' onPress={() => router.push("welcome")}/>   
    </View>
    </ScreenContentWrapper>
  )
}

export default index