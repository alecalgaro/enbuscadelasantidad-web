import React from 'react'
import styled from 'styled-components'
import data from './data.json'
import imgLogo from '../img/logo.webp'

function Navbar() {

  return (
    <>
      <NavContainer>
        <>
          <div className='menu_izq'>
            <a href="#about">{data[0].nav_about}</a>
            <a href="#play">{data[0].nav_play}</a>
          </div>
            <a href="#home"><img src={imgLogo} alt="logo helios" /></a>
          <div className='menu_der'>
            <a href="#donate">{data[0].nav_donate}</a>
            <a href="#contact">{data[0].nav_contact}</a>
          </div>
        </>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 4px 4px 5px #e5e5e5;   // si la barra se pone abajo, seria -4px en lugar de +4px
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  z-index: 10;

  a{
    color: var(--black);
    display: block;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: .5rem .5rem 0 .5rem;
    text-decoration: none;
    transition: letter-spacing .3s;
      
    &:hover{
      color: var(--amarillo);
    }
  }

  @media(min-width: 576px){
    a{
      font-size: 1.2rem;
      margin: .5rem 1rem 0 1rem;
    }
  }

  @media(min-width: 768px){
    a{ margin: .5rem 1.4rem 0 1.4rem; }
  }

  @media(min-width: 992px){
    a{ margin: .5rem 2rem 0 2rem; }
  }

  div { display: flex; }

  img { width: 2.5rem; }
`