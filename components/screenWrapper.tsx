import { Text, View, ViewProps } from 'react-native'
import React, { Component } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type props =  ViewProps & {
    children: React.ReactNode,
    bg: string
}


export function ScreenWrapper({children,bg, ...props}: props)  {

    const {top} = useSafeAreaInsets()
    const paddingTop = top>0 ? top + 5 : 30
    return (
      <View style ={{flex:1, paddingTop,backgroundColor:bg}}{...props}>
        {
            children
        }
      </View>
    )
  }
