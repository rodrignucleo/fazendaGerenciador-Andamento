import React from 'react';
import {
  Text, 
  View, 
  Image,
  TouchableOpacity,
} from 'react-native';

import LogoLogin from './../../../assets/loginIcone.png';
import { estilos } from './estilos';

export function ButtoIcon(){
    return(
       <TouchableOpacity style={estilos.container} activeOpacity={0.75}>

           <View style={estilos.iconWrapper}>
               <Image source = {LogoLogin}  style={estilos.icone} />
           </View>

           <Text style={estilos.titulo}>
               Acessar
           </Text>
       </TouchableOpacity>
    );
}