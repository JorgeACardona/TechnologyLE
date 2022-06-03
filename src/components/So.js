import React from 'react'
import { Header } from '../components/Header'
import MS from '../imgs/MS.PNG'
import windows from '../imgs/windows.PNG'
import MAC from '../imgs/MAC.PNG'
import unix from '../imgs/unix.PNG'
import Linux from '../imgs/Linux.PNG'
import Solaris from '../imgs/Solaris.PNG'
import '../styles/So.css'

export function So() {
    return (

        <body id="body">
            <Header />
            <h1>Sistemas Operativos</h1>
            <div class="infod">
                <img class="derecha1" src={MS} />
                <aside><h2>MS/DOS</h2><p>El sistema operativo DOS, por Disk Operating System
                     o MS/DOS fue diseñado por Microsoft para las computadoras personales IBM en 1981. 
                     MS/DOS podía administrar discos floppy y archivos, 
                    memoria y dispositivos de entrada y salida. Se controla a través de comandos.</p>
                    <a href="https://ms-dos.waxoo.com/descargar" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={windows} />
                <aside><h2>Windows</h2>
                    <p>El sistema operativo más conocido es Windows, ampliamente utilizado en las computadoras 
                        personales PC de la compañía Microsoft. Microsoft 
                    Windows es una familia de sistemas operativos gráficos que han evolucionado a lo largo de los años</p>
                    <a href=" https://go.microsoft.com/fwlink/?linkid=2171764" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={MAC} />
                <aside><h2>MAC</h2><p>El Sistema operativo de la compañía Apple Macintosh para computadores 
                    personales y laptops MAC OS se basa en una interfaz gráfica de usuario, basado en el núcleo de UNIX.</p>
                    <a href="https://updates.cdn-apple.com/2019/cert/041-90501-20191011-37f6fda1-2122-4396-9c64-4c2d2da9182e/macOSUpd10.13.2.dmg" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={unix} />
                <aside><h2>Unix</h2>
                    <p>El sistema operativo UNIX fue desarrollado en los laboratorios Bell por Ken Thompson, Dennis Ritchie y
                         otros al principio de 1970s. Es un sistema multiprograma y multi-usuarios escrito en el lenguaje de programación C. Se usa desde microcomputadores
                         hasta supercomputadoras. Además, es la base para otros sistemas operativos como MAC OS y Solaris.</p>
                    <a href="https://www.microsoft.com/es-es/download/confirmation.aspx?id=58208" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p>
                    </a></aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={Solaris} />
                <aside><h2>Solaris</h2><p>El sistema operativo desarrollado por la compañia Sun Microsystems, Solaris, pertenece a la familia 
                    de sistemas operativos de UNIX. Actualmente se llama Oracle Solaris. Se caracteriza por ser un sistema multiprocesador simétrico.óviles: iphone y iPad. Fue creado a partir de MAC OS/X en 2007.</p>
                    <a href=" https://www.oracle.com/co/solaris/solaris11/downloads/solaris-downloads.html#" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p></a></aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={Linux} />
                <aside><h2>Linux</h2>
                    <p>Linux es un sistema operativo de dominio público y gratuito, originalmente diseñado por Linus Torvalds. En este sistema, el usuario puede seleccionar el administrador de ventanas de su preferencia, como KDE y Gnome.</p>
                    <a href="https://linux.ciberaula.com/articulo/descargar_linuX" target="_blank">
                        <p>Clic aquí para ver descargar el sistema operativo.</p>
                    </a></aside>
                <div class="reset"></div>
            </div>
            </body>

)
}