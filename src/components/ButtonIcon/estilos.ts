import { StyleSheet } from "react-native";
import { temas } from "../../global/styles/temas";

export const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -170,
        marginLeft: 40,
        backgroundColor: temas.colors.buttonColor,
        height: '12%',
        width:150,
        borderRadius: 8,
        flexDirection: 'row',

    },
    titulo:{
        flex:1,
        textAlign: 'center',
        fontSize: 15,
        fontFamily:temas.fonts.titleRaj700,
        
    },
    iconWrapper:{
        height: 20,
        width: 50,
       justifyContent: 'center',
       alignItems: 'center',
       borderRightWidth: 2,
    },
    icone:{
        height: 35,
        width: 35,
    }
    
});