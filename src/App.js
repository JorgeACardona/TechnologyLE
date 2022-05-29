
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Homebody} from '../src/components/Homebody';
import {Cfuncionales} from '../src/components/Cfuncionales';
import { Perifericos } from './components/Perifericos';
import { ManHardware } from './components/ManHardware';

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
    </Routes>
  </BrowserRouter>
   
)
    }
}

