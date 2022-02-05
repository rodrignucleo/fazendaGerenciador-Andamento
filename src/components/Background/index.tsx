import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

import { estilos } from "./estilos";
import { temas } from "../../global/styles/temas";

export function Background() {
    return(
        <LinearGradient 
        style={estilos.container}
        colors={[temas.colors.background, temas.colors.background]}
        >
            
        </LinearGradient>
    )
}