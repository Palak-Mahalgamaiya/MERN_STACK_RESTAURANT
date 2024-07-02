import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from './Pages/home';
import Notfound from './Pages/notfound';
import Success from './Pages/sucess';
const App = () => {
  return <Router>
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/success" element ={<Success/>}/>
      <Route path ="*" element ={<Notfound/>}/>
    </Routes>
  </Router>
}

export default App;
