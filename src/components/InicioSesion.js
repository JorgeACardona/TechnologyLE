import React from 'react'
import '../styles/Homebody.css'
import Computador from '../imgs/Computador.PNG'
import '../styles/InicioSesion.css'


export function InicioSesion() {
    return (

        <body id="body">
            
            <img id="img-computador" src={Computador}></img>

            <div class="mensaje">
                <h2>Bienvenidos a</h2>
                <h2>Technology L&E</h2>
            </div>

            <form class="form">
                <h2 class="for_title">Inicia Sesión</h2>

                <div class="form_container">
                    <div class="form_group">
                        <input type="text" id="name" class="form_input" placeholder=""></input>
                        <label for="user" class="form_label">Nombre:</label>
                        <span class="form_line"></span>
                    </div>

                    <div class="form_group">
                        <input type="text" id="user" class="form_input" placeholder=""></input>
                        <label for="user" class="form_label">Correo:</label>
                        <span class="form_line"></span>
                    </div>

                    <div class="form_group">
                        <input type="text" id="password" class="form_input" placeholder=""></input>
                        <label for="user" class="form_label">Contraseña:</label>
                        <span class="form_line"></span>
                    </div>

                    <input type="submit" class="form_submit" value="Entrar"></input>
                    <a href="/administracion" class="link-secondary">Administrador</a>
                </div>
            </form>

        </body>

    )
}