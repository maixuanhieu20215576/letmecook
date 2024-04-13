import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './signup/signup';
import Home from './App';
import Congthuc from './congthuc/congthuc';
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/congthuc' element={<Congthuc/>}/>
    </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);