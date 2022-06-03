import React from 'react'
import { Header } from '../components/Header'
import MAS from '../imgs/MAS.PNG'
import MC from '../imgs/MC.PNG'
import MP from '../imgs/MP.PNG'
import MPS from '../imgs/MPS.PNG'

import '../styles/Mantenimiento.css'

export function Mantenimiento() {
    return (

        <body id="body">
            <Header />
            <h1>Mantenimiento al Software</h1>
            <div class="infod">
                <img class="derecha1" src={MC} />
                <aside><h2>Mantenimiento correctivo de software</h2><p>El mantenimiento correctivo del software es la forma clásica y típica de mantenimiento (para el software y cualquier otra cosa). El mantenimiento de software correctivo es necesario cuando algo sale mal en una pieza de software, incluidos fallos y errores. Estos pueden tener un impacto generalizado en la funcionalidad del software en general y, por lo tanto, deben abordarse lo antes posible</p>
                    </aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={MP} />
                <aside><h2>Mantenimiento preventivo de software</h2>
                    <p>El mantenimiento preventivo de software está mirando hacia el futuro para que su software pueda seguir funcionando como se desee durante el mayor tiempo posible. 
Esto incluye realizar los cambios necesarios, actualizaciones, adaptaciones y más. El mantenimiento preventivo del software puede abordar pequeños problemas que en un momento dado pueden carecer de importancia, pero pueden convertirse en problemas mayores en el futuro. Estos se denominan fallas latentes que deben detectarse y corregirse para asegurarse de que no se conviertan en fallas efectivas. 
</p>
                    </aside>
                <div class="reset"></div>
            </div>

            <div class="infod">
                <img class="derecha1" src={MPS} />
                <aside><h2>Mantenimiento perfecto de software</h2><p>Al igual que con cualquier producto en el mercado, una vez que el software se lanza al público, surgen nuevos problemas e ideas. Los usuarios pueden ver la necesidad de nuevas características o requisitos que les gustaría ver en el software para convertirlo en la mejor herramienta disponible para sus necesidades. Es entonces cuando entra en juego el mantenimiento perfecto del software. 
El mantenimiento perfecto de software tiene como objetivo ajustar el software agregando nuevas características según sea necesario y eliminando características que son irrelevantes o no efectivas en el software dado. Este proceso mantiene el software relevante a medida que el mercado y las necesidades del usuario cambian. 
</p>
                  </aside>
                <div class="reset"></div>
            </div>

            <div class="infoi">
                <img class="izquierda1" src={MAS} />
                <aside><h2>Mantenimiento adaptativo de software</h2>
                    <p>El mantenimiento adaptativo de software tiene que ver con las tecnologías cambiantes, así como con las políticas y reglas relacionadas con su software. Las cuales incluyen cambios en el sistema operativo, almacenamiento en la nube, hardware, etc. Cuando se realizan estos cambios, su software debe adaptarse para cumplir adecuadamente los nuevos requisitos y continuar funcionando bien. </p>
                    </aside>
                <div class="reset"></div>
            </div>
            </body>

)
}