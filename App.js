import React from "react" //para utilizar as tags html, jsx
import'./index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAle from './components/basicos/NumeroAle'
import Modelo from './components/Modelo'

export default function App(props){
    return(
        <div className='app'>
        <div>
            <h1>Fundamentos do React</h1>

            <div className='cards'>

            <Modelo> <Primeiro/> </Modelo>

            <Modelo> <ComParametro titulo="Frio em sp" subtitulo="neve"/> </Modelo>
            
            <Modelo> <ComParametro titulo="Calor no Rj" subtitulo="sol"/> </Modelo>

            <Modelo> <Fragmento/> </Modelo>
            
            <Modelo>  <NumeroAle min={100}   max={1000}/> </Modelo> 
           

        </div>
        
        </div>
        </div>
    )
}