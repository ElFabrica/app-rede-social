import { View, Text, Button } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router"
import {screenWra}

    const index = () => {

    const router = useRouter()

  return (
    <ScreenWraper
    <View>
      
      <Text>Olá mundo</Text>
      <Button title='Welcome' onPress={() => router.push("welcome")}/>   
    </View>
  )
}

export default index