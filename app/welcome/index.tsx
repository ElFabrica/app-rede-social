import { View, Text, Image } from 'react-native'
import React from 'react'
import { ScreenWrapper } from '@/components/screenWrapper'
import {StatusBar} from "expo-status-bar"
import { styles } from './styles'
import { Button } from '@/components/button'
import { Loading } from '@/components/Loading'

export function Welcome() {
    return (
        <ScreenWrapper
            bg="white">
            <StatusBar style="dark" />
        <View style={styles.container}>
            {/* Welcome image */}
            <Image
            source={require("../../assets/images/welcome.png")}
            resizeMode='contain'
            style={styles.welcomeImage}
            />
            {/* Title */}
            <View style={styles.containerText} >
                <Text style ={styles.title}>
                    LinkUp
                </Text>

                <Text style ={styles.punchible}>
                    Where every thought find a home and every image tells a story
                </Text>

            </View>
            {/*footer */}
            <View style={styles.footer}>

                <Button
                title='Entrar'
                hasShadow={true}
                loading={false}
                />
                <Loading
                size={14}
                />

        
            </View>
        </View>

        </ScreenWrapper>
    )
}

