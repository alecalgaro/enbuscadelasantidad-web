import React from 'react'
import styled from 'styled-components'
import imgBackgroud from '../img/bg-header.webp'
import imgLogoHeader from '../img/logo-header.webp'

import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      <ImageBackground src={imgBackgroud} className="img-background" alt="imagen de fondo" />
      <HeaderContainer
        id='home'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .8}}
        >
        <Logo>
          <h1><img src={imgLogoHeader} alt="logo header"/></h1>
        </Logo>

        <HeaderDescription>
          <h1>
            <span>Te damos la bienvenida a</span><br /> 
                  EN BUSCA DE LA SANTIDAD
          </h1>
          <p>Te invitamos a esta nueva aventura, en la cual nos vamos a divertir y aprender cosas importantes sobre la 
            Infancia y Adolescencia Misionera (IAM), todo esto haciendo algo que seguro te gusta... ¡Jugar!</p>
          
          <Buttons>
            <button><a href="https://drive.google.com/file/d/1q4pKuPM2Flax5hUr6_GQjakA33gcMS8d/view?usp=sharing" target="_blank">Trailer</a></button>
            <button><a href="#play">Jugar</a></button>
          </Buttons>
        </HeaderDescription>

      </HeaderContainer>
    </>
  )
}

export default Header;

const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
`

const HeaderContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media(min-width: 992px){
    flex-direction: row-reverse;
  }
`

const Logo = styled(motion.div)`
  img {
      width: 28rem;
      animation: logo 1.85s infinite alternate-reverse;

      @media (min-width: 756px) {
          width: 40rem;
      }

      @media (min-width: 992px) {
          width: 50rem;
          padding: 2rem;
      }
    }

    @keyframes logo {
      from { transform: translateY(0); }
      to { transform: translateY(15px); }
    }
`

const HeaderDescription = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  order: 1;

  h1{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  span{ color: var(--amarillo); }

  p{
    margin: 1.5rem 0 2rem 0;
    color: var(--grey-text);
    font-size: 1.6rem;
    text-align: center;
  }

  @media(min-width: 768px){
    width: 70%;
    
    h1{ font-size: 3rem; }

  }

  @media(min-width: 1200px){
    width: 50%;
  }
`

const Buttons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  
  button{
    background: var(--amarillo);
    border: none;
    width: 9rem;
    height: 3rem;
    font-size: 1.8rem;
    font-weight: 300;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .5s;

    a{ color: var(--white); }

    &:hover{
      letter-spacing: .2rem;
    }
  } 
`