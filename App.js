import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios'
import Home from '../src/pages/Home'
import Join from '../src/pages/Join'
import Login from '../src/pages/Login'


/*
class App extends Component { //App 가장먼저 만들어주는 component, index.js에서 사용

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
  
} 

export default App;
*/

axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.request.use(
  config => {
      //alert(1)
      return config;
  },
  error => {
      Promise.reject(error)
  }
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

