import React from 'react'
import { Header } from '../components/Header'
import '../styles/Perifericos.css'
import pantalla from '../imgs/pantalla.jpg'
import teclado from '../imgs/teclado.webp'
import mouse from '../imgs/mouse.jpg'
import altavoces from '../imgs/altavoces.webp'
import microfono from '../imgs/microfono.jfif'
import USB2 from '../imgs/USB2.jpg'

export function Perifericos() {
    return (

        <body id="body">
            <Header />

            <div class="info">

                <aside><h1>Periféricos</h1>
                    <p> El periférico es el aparato que, conectado al CPU de una computadora, 
                        brinda herramientas o prestaciones auxiliares. Los periféricos permiten 
                        que el ordenador interactúe con el medio externo. </p></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={pantalla} />
                <aside><h2>Monitor o pantalla</h2>
                    <p>El monitor del computador, también conocido como pantalla,  muestra la información de tu equipo como imágenes y textos, que son generados gracias a una tarjeta de video que se encuentra en el interior de la torre del computador.
                        Monitor o pantalla de un computador de escritorio.
                        La función del monitor es que puedas interactuar con el computador, con la ayuda del ratón y el teclado.
                        Hay varios tipos de monitores.
                        Las pantallas muestran las imágenes a través de pixeles, que son las unidades básicas de una imagen. La resolución de los monitores depende de la cantidad de píxeles que estos tengan.</p>
                    <a href="https://listado.mercadolibre.com.co/pantalla-para-pc" target="_blank">
                        <p>Clic aquí para ver ofertas</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={teclado} />
                <aside><h2>Teclado</h2>
                    <p>Un teclado es un periférico de entrada o dispositivo, en parte inspirado en el teclado de las máquina
                        de escribir, que utiliza una disposición de botones o teclas, para que actúen como palancas mecánicas
                        o interruptores electrónicos que envían información al ordenador.</p>
                    <a href="https://listado.mercadolibre.com.co/teclado#D[A:teclado]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={mouse} />
                <aside><h2>Mouse</h2>
                    <p>El ratón hace parte de los periféricos de tu equipo y es la parte del computador que te
                        permite interactuar con los objetos que aparecen en la pantalla, por medio de un cursor o
                        puntero que verás en el monitor.
                        Por lo general, el mouse o ratón tiene dos botones:
                        El izquierdo, que te sirve para abrir, arrastrar, seleccionar y ejecutar funciones.
                        El derecho, que te permite acceder a funciones adicionales de los comandos.
                        La mayoría de los ratones cuentan con una rueda central conocida como scroll. Con ella
                        podrás desplazarte por los documentos desde la parte superior a la inferior y viceversa.</p>
                    <a href="https://listado.mercadolibre.com.co/mouse#D[A:mouse]" target="_blank">
                        <p>Clic aquí para ver ofertas</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={altavoces} />
                <aside><h2>Altavoces</h2>
                    <p>Son los dispositivos que le dan salida de audio al computador, gracias a ellos puedes escuchar el
                        sonido de la música o video que estés reproduciendo. Dependiendo del modelo, los puedes conectar
                        al puerto USB o al de audio. Algunos computadores traen los altavoces incorporados dentro del monitor.</p>
                    <a href="https://listado.mercadolibre.com.co/altavoces-pc#D[A:altavoces%20pc]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={microfono} />
                <aside><h2>Micrófono</h2>
                    <p> Es un dispositivo de entrada de audio. Se pueden conectar a la computadora para grabar sonido o 
            para comunicarse por internet con otras personas. Muchos equipos vienen con micrófonos incorporados 
            dentro de la pantalla o monitor, especialmente los computadores portátiles</p>
                    <a href="https://listado.mercadolibre.com.co/microfono-pc#D[A:microfono%20pc]" target="_blank">
                        <p>Clic aquí para ver ofertas</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={USB2} />
                <aside><h2>Memoria USB</h2>
                    <p>Un dispositivo USB, también conocido como dispositivo flash o dispositivo de memoria, es un 
                        dispositivo pequeño y portátil que se conecta al puerto USB de su computadora. Los dispositivos 
                        USB se utilizan comúnmente para almacenamiento, respaldo de datos y transferencia de archivos 
                        entre dispositivos.</p>
                    <a href="https://listado.mercadolibre.com.co/memoria-usb#D[A:memoria%20usb]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>
           .

        </body>

    )
}