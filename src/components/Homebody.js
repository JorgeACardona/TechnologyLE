import React from 'react'
import { Header } from '../components/Header'
import '../styles/Homebody.css'
import Computador from '../imgs/Computador.PNG'
import USB from '../imgs/USB.PNG'

export function Homebody() {
    return (

        <body id="body">
            <Header />
            <br />
            <img id="img-computador" src={Computador}></img>

            <h1 id="cont-titulo">Bienvenidos a Technology L&E</h1>

            <div id="cont-informacion">
                <h2 id="cont-subtitulo">¿Quiénes somos?</h2>
                <p id="parrafo">
                    Brinda información a las personas que quieren conocer sobre los componentes<br />
                    de un computador. Tambien podrás obtener una orientación que te ayude a encontrar  <br />
                    tu mejor opción de computador dependiendo a tu necesidad.</p>
            </div>
            <img id="img-usb" src={USB}></img>
        </body>

    )
}