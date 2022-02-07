import { StyleSheet } from "react-native";
import { temas } from "../../global/styles/temas";


export const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: temas.colors.background,
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
      color: '#000000',
      textAlign:'center',
      marginBottom: 200,
      fontFamily:temas.fonts.titleInter700,
    },
    header:{
      width: '100%',
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 26,
    },
      
  });