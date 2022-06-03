import React from 'react'
import { Header } from '../components/Header'
import '../styles/Cfuncionales.css'
import Microprocesador from '../imgs/Microprocesador.jpeg'
import placaBase from '../imgs/placaBase.jpg'
import RAM from '../imgs/RAM.jfif'
import discoDuro from '../imgs/discoDuro.jpg'
import tarjetaGrafica from '../imgs/tarjetaGrafica.jpg'
import fuenteAlimentacion from '../imgs/fuenteAlimentacion.jpg'
import tarjetaRed from '../imgs/tarjetaRed.jpg'
import disipador from '../imgs/disipador.jfif'


export function Cfuncionales() {
    return (

        <body id="body">
            <Header />

            <div class="info">

                <aside><h1>Componentes funcionales</h1>
                    <p>Son los encargados de procesar todas las instrucciones que proporciona el software con el cual está cargada la computadora. Abarca
                        el conjunto de componentes indispensables necesarios para otorgar la funcionalidad mínima</p></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={Microprocesador} />
                <aside><h2>Microprocesador</h2><p>Es el cerebro del ordenador, el que se encarga de analizar absolutamente toda
                    la información que pasa por él en forma de unos y ceros. El procesador decodifica
                    y ejecuta las instrucciones de los programas cargados en la memoria principal del
                    ordenador y coordina y controla todos o casi todos los componentes, así como los
                    periféricos conectados.</p>
                    <a href="https://computacion.mercadolibre.com.co/componentes-pc-procesadores/" target="_blank">
                        <p>Clic aquí para ver ofertas</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={placaBase} />
                <aside><h2>Placa base</h2>
                    <p>Una placa base es básicamente una placa PCB constituida por un circuito integrado que
                        interconecta una serie de chips, condensadores y conectores repartidos por toda ella,
                        que en su conjunto forma el ordenador. En esta placa conectaremos el procesador,
                        la memoria RAM la tarjeta gráfica y prácticamente todos los elementos internos de
                        nuestro ordenador.</p>
                    <a href="https://listado.mercadolibre.com.co/placa-base#D[A:placa%20base]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={RAM} />
                <aside><h2>Memoria RAM</h2>
                    <p>La memoria RAM (Random Access Memory) es un componente interno que se instala en la placa
                        base y sirve para cargar y almacenar todas las instrucciones que se ejecutan en el procesador.
                        Estas instrucciones son enviadas desde todos los dispositivos conectados a la placa base y a
                        los puertos de nuestro equipo. La memoria RAM tiene comunicación directa con el procesador
                        para que la trasferencia de datos sea más rápida.</p>
                    <a href="https://listado.mercadolibre.com.co/memoria-ram#D[A:memoria%20ram]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={discoDuro} />
                <aside><h2>Disco duro</h2>
                    <p>Es un dispositivo que se instala de forma interna en nuestro equipo, aunque también existen
                        de forma externa, y conectados mediante USB en la mayoría de casos. El disco duro será el
                        componente encargado de almacenar de forma permanente todos los datos que nos descarguemos
                        de Internet, documentos y carpetas de hayamos creado, imágenes, música, etc. Y lo más importante
                        de todo, es el elemento que lleva instalado el sistema operativo con el que podemos hacer
                        funcionar nuestro ordenador.</p>
                    <a href="https://listado.mercadolibre.com.co/disco-duro#D[A:disco%20duro]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={tarjetaGrafica} />
                <aside><h2>Tarjeta gráfica</h2>
                    <p>Es un dispositivo que va conectado a una ranura de expansión PCI-Express 3.0 x16 que cuenta
                        con un procesador gráfico o GPU que se encarga de realizar todo el complejo procesamiento de
                        gráficos de nuestro ordenador. Decimos que no son estrictamente necesarias porque la mayoría
                        de procesadores actuales cuentan con un circuito en su interior que es capaz de encargarse de
                        hacer el procesamiento de estos datos gráficos, y es por esto que las placas bases tienen
                        puertos HDMI o DisplayPort para conectar nuestra pantalla a ellas.  A estos procesadores de se
                        denominan APU (Unidad de procesamiento Acelerado) ¿Para qué queremos entonces una tarjeta gráfica?
                        Sencillo, porque el procesador gráfico de una tarjeta es muchísimo más potente que el que tienen
                        los procesadores.</p>
                    <a href="https://listado.mercadolibre.com.co/tarjeta-grafica#D[A:tarjeta%20grafica]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={fuenteAlimentacion} />
                <aside><h2>Fuente de alimentación</h2>
                    <p>Es un dispositivo que proporciona corriente eléctrica a los elementos electrónicos que constituyen
                        nuestro ordenador, y que son básicamente los que ya hemos visto en anteriores apartados.</p>
                    <a href="https://listado.mercadolibre.com.co/fuentes-de-alimentacion#D[A:fuentes%20de%20alimentacion]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={tarjetaRed} />
                <aside><h2>Tarjeta de red</h2>
                    <p>Muy posiblemente no tengas este componente como tal visible en tu ordenador, ya que, en la
                        totalidad de las ocasiones, nuestra placa base tiene ya una tarjeta de red incorporada. Una
                        tarjeta de red es una tarjeta de expansión, o interna de la placa base que nos va a permitir
                        conectarnos a nuestro router para obtener conexión a Internet o a una red LAN. Existen dos
                        tipos de tarjetas de red: Ethernet y Wi-Fi</p>
                    <a href="https://www.linio.com.co/c/componentes-de-red/tarjetas-de-red" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={disipador} />
                <aside><h2>Disipadores y refrigeración líquida</h2>
                    <p>Por último, debemos citar como componentes de un ordenador los disipadores. No son elementos
                        estrictamente necesarios para que un ordenador funcione, pero su ausencia puede provocar que
                        un ordenador deje de funcionar y se rompa. La misión de un disipador es bien sencilla,
                        recoger el calor que genera un elemento electrónico como un procesador debido a su alta
                        frecuencia y transmitirlo al ambiente. La refrigeración líquida consiste en separar los
                        elementos de disipación en dos grandes bloques que componen un circuito de agua.</p>
                    <a href="https://listado.mercadolibre.com.co/disipadores#D[A:disipadores]" target="_blank">
                        <p>Clic aquí para ver ofertas</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

        </body>

    )
}