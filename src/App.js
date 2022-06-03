
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Homebody} from '../src/components/Homebody';
import {Cfuncionales} from '../src/components/Cfuncionales';
import { Perifericos } from './components/Perifericos';
import { ManHardware } from './components/ManHardware';
import { Orientacion } from './components/Orientacion';
import { Sesion } from './pages/Sesion';
import { Registro } from './pages/Registro';
import { So } from './components/So';
import { Programas } from './components/Programas';
import { Mantenimiento } from './components/Mantenimiento';
import { Admin } from '../src/components/Admin';


export class App extends React.Component{
    render(){
return(
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homebody />} />
      <Route path="/home" element={<Homebody />} />
      <Route path="/componentesfuncionales" element={<Cfuncionales />} />
      <Route path="/perifericos" element={<Perifericos />} />
      <Route path="/mantenimientohardware" element={<ManHardware />} />
      <Route path="/orientacion" element={<Orientacion />} />
      <Route path='/iniciarsesion' element={<Sesion />} />
      <Route path="/registrarse" element={<Registro/>}/>
      <Route path="/So" element={<So/>}/>
      <Route path="/Programas" element={<Programas/>}/>
      <Route path="/Mantenimiento" element={<Mantenimiento/>}/>
      <Route path ="/administracion" element={<Admin />}/>


    </Routes>
  </BrowserRouter>
   
)
    }
}

