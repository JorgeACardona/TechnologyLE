
import React from 'react';
import { Header } from '../components/Header';
import '../styles/Orientacion.css';


export function Orientacion() {

    function resultado(){
        var p1, p2, p3, nota;
    
        
        if (document.getElementById('p11').checked==true) {p1=1}
        else {p1=0}
        
        if (document.getElementById('p22').checked==true) {p2=1}
        else {p2=0}
        
        if (document.getElementById('p33').checked==true) {p3=1}
        else {p3=0}
        
    
        nota=p1+p2+p3;
        alert(" Aciertos: " + nota);
        window.location = '/orientacion'
    }


    return (

        <body id="body">
            <Header />
            
            <h1> Orientación</h1>

            <form  id="form">
                <p id="titulo"><strong>¿Para qué usarías el computador?</strong></p>
                <ol>
                    <li><input type="radio" name="pregunta1" id="p11" /> Trabajo</li>
                    <li><input type="radio" name="pregunta1" id="p12" /> Estudio</li>
                    <li><input type="radio" name="pregunta1" id="p13" /> Juego</li>
                    <li><input type="radio" name="pregunta1" id="p14" /> Otro</li>
                </ol>

                <p id="titulo"><strong>¿Cuál es tu presupuesto?</strong></p>
                <ol>
                    <li><input type="radio" name="pregunta1" id="p21" /> 1’000.000 – 2´000.000</li>
                    <li><input type="radio" name="pregunta1" id="p22" /> 2’000.000 – 5’000.000</li>
                    <li><input type="radio" name="pregunta1" id="p23" /> 5’000.000 – 10’000.000</li>
                    <li><input type="radio" name="pregunta1" id="p24" /> 10’000.000 o más</li>
                </ol>

                <p id="titulo"><strong>¿Prefieres compuitador de escritorio o portátil?</strong></p>
                <ol>
                    <li><input type="radio" name="pregunta1" id="p31" /> Portatil</li>
                    <li><input type="radio" name="pregunta1" id="p32" /> De escritorio</li>
                </ol>

                <button id="resultado" type="button" class="btn btn-warning btn-lg" >RESULTADO</button>

            </form>
               
            


        </body>

    );
}

