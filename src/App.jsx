import React from 'react'
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Game from './components/Game'
import Footer from './components/Footer'
import Donate from './components/Donate';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Header />
    <About />
    <Game />
    <Donate />
    <Footer />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  :root {
    --amarillo: #FFCA2C;
    --rojo: #AD4D3D;
    --celeste: #8CCCE5;
    --verde: #82B572;
    --black: #191919;
    --white: #ffffff;
    --grey-text: #565c62;
    --grey: #E9E9E9;
    --bg-grey: #f8f8f8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: 50px;
  }

  a {
    text-decoration: none;
  }
`
