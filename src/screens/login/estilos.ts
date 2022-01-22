import { StyleSheet } from "react-native";
import { temas } from "../../global/styles/temas";


export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: temas.colors.background,
      alignItems: 'center',
      justifyContent: 'center' 
      },
    titulo:{
      fontSize: 40,
      color:  temas.colors.titulo,
      textAlign:'center',
      fontFamily:temas.fonts.titleRaj700,
      marginBottom: 16,
    },
    subTitulo:{
      fontSize: 17,
      color: '#FFFFFF',
      textAlign:'center',
      marginBottom: 200,
      fontFamily:temas.fonts.textInter400,
    },
    conteudo:{
      marginTop: -45,
      paddingHorizontal: 50
    },
    image:{
      marginTop: -60,
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    },

    input:{
      height: 50,
      width: 200,
      borderBottomWidth: 1,
    }
      
  });