import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Text, 
  View, 
  Image,
  ImageBackground
} from 'react-native';


import LogoImg from '../../assets/logo.png';
import FundoLogin from '../../assets/fundoLogin.png';

import { estilos } from './estilos';
import { ButtoIcon } from '../../components/ButtonIcon';

export function Login() {
  return (
    <View style={estilos.container}>
      <StatusBar style="auto" hidden/>
      <ImageBackground 
        source={FundoLogin}
        style={estilos.imageBackground}
      >
      
      <Image
        source={LogoImg}
        style={estilos.image}
        resizeMode='stretch'
      />

      <View style={estilos.conteudo}>
        
        <Text style={estilos.titulo}>
          Otimize{'\n'}
          sua Fazenda
        </Text>

        <Text style={estilos.subTitulo}>
          Gerencie a Fazenda com ferramentas prontas{'\n'}
          para o dia a dia{'\n'}
        </Text>

        <ButtoIcon/> 

      </View>
    </ImageBackground>
    </View>
  );
}