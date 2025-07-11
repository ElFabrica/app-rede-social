import { StyleSheet } from "react-native"
import {wp, hp} from "../../helpers/common"
import {theme} from "../../constants/theme"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        paddingHorizontal:wp(4)
    },
    welcomeImage:{
        height: hp(30),
        width:wp(100),
        alignSelf:"center"
    },
    containerText:{
        gap:20
    },title:{
        color: theme.colors.text,
        fontSize:hp(4),
        textAlign:"center",
        fontWeight: theme.fonts.extraBold
    },
    punchible:{
        textAlign:"center",
        paddingHorizontal:wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text
    }
    
})