import React from 'react'
import { Header } from '../components/Header'
import '../styles/ManHardware.css'


export function ManHardware() {
    return (

        <body id="body">
            <Header />


            <div class="infod">

                <aside><h1>Mantenimiento del hardware</h1>
                    <p>El mantenimiento de hardware engloba las acciones que nos permiten mantener, cuidar y reemplazar oportunamente los componentes físicos de una computadora.
                        Esta práctica busca mantener los componentes en estado óptimo todo el tiempo para alargar su vida útil y evitar fallas en el sistema.
                    </p>
                    <h2>Mantenimiento preventivo</h2>
                    <p>EL hardware nos permite tomar acciones estratégicas para anticipar el deterioro de un PC o computador portátil. 
                    Incluye dos tipos de acciones:
                    </p>
                        <ul>
                            <li>Limpieza y refrigeración de componentes físicos</li>
                            <li>Acciones sobre el sistema (partes no físicas)</li>
                        </ul>
                    <h2>Mantenimiento correctivo</h2>
                    <p>Este consiste en los procesos de reparación y sustituciones en el hardware de nuestro ordenador, y se realiza cuando los componentes dejan de funcionar 
                        de manera óptima. Los componentes que deben tener un mantenimiento periódicamente son:</p>
                        <ul>
                            <li>Fuente de alimentación</li>
                            <li>Memoria RAM</li>
                            <li>Disco duro</li>
                            <li>Tarjeta gráfica</li>
                        </ul>

                    </aside>
                <div class="reset"></div>
            </div>


        </body >
            
      

    )
}