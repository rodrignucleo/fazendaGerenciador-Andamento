import React from 'react';
import { Login } from './src/screens/login';
import {useFonts} from "expo-font";

import {Rajdhani_700Bold, Rajdhani_400Regular} from '@expo-google-fonts/rajdhani';
import {Inter_700Bold, Inter_400Regular} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Inter_700Bold,
    Inter_400Regular,
    Rajdhani_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor='transparent'/>
      <Login/>
    </>
  );
}
