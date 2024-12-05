import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Header} from './components/Header'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import {Routes,Route} from 'react-router-dom'
import { Client, Databases } from 'appwrite'


function App() {
  const client = new Client();
  client.setProject('6746c4c7000bbc64cfbd');
  client.setEndpoint("https://cloud.appwrite.io/v1")

  const database = new Databases( client )
  

  return (
    <>
      <Header text="Grapy" />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path='/register' element={ <Signup/> } />
        <Route path='/login' element={ <Signin/> } />
      </Routes>
      
    </>
  )
}

export default App
