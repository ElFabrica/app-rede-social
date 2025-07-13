import { StyleSheet } from 'react-native'
import { wp, hp } from '@/helpers/common'
import { theme } from '@/constants/theme'

export const styles = StyleSheet.create({
    button:{
        backgroundColor:theme.colors.primary,
        height: hp(6.6),
        justifyContent: "center",
        alignItems: "center",
        borderCurve: "continuous",
        borderRadius: theme.radius.xl

    },
    buttonStyle:{
        marginHorizontal:wp(3)
    },
    shadowStyle:{
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    },
    text:{
        fontSize: hp(2.5),
    color: "white",
    fontWeight: theme.fonts.bold
    },
    textStyle:{

    },
        
    

})