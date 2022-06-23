import React, {useState, useEffect} from 'react'
import { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Game from './components/Game'
import Footer from './components/Footer'
import Donate from './components/Donate'
import Contact from './components/Contact'

function App() {

  const [language, setLanguage] = useState('español');
  var i = 0;
  
  useEffect(() => {
    setLanguage(localStorage.getItem('language'));
  }, []);
  
  // A los componentes se les pasa "i" para elegir que lenguaje tomar del .json, para evitar evaluar cosas en cada componente
  { language == 'español' ? i = 0
    : language == 'ingles' ? i = 1
    : language == 'italiano' ? i = 2
    : language == 'portugues' ? i = 3
    : i = 4
  }

  return (
    <>
    <GlobalStyle />
    <Navbar i={i}/>
    <header>
      <Header i={i}/>  
    </header>
    <body>
      <About i={i}/>
      <Game i={i}/>
      <Donate i={i}/>
      <Contact i={i}/>  
    </body>
    <footer>
      <Footer i={i}/>
    </footer>
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

  body{ background: none; }   // para que se vea el fondo de nubes

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: 20px;
  }

  a {
    text-decoration: none;
  }
`
