import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { Carousel } from 'react-bootstrap';

import slide_1 from '../img/slide-1.webp'
import slide_2 from '../img/slide-2.webp'
import slide_3 from '../img/slide-3.webp'
import slide_4 from '../img/slide-4.webp'
import slide_5 from '../img/slide-5.webp'
import iconCel from '../img/icons/icono-celular.webp'
import iconPC from '../img/icons/icono-compu.webp'
import iconOnline from '../img/icons/icono-online.webp'
import iconFlecha from '../img/icons/flecha.png'

const Game = () => {
  return (
    <>
      <GameContainer id='play'>
        <SectionTitle title="Juego"/>

        <div className='contenido'>
          <p>La idea de este videojuego es acompañar a tu personaje en el camino hacia la santidad, recorriendo el maravilloso mundo de la Infancia y Adolescencia Misionera.
          Lo podrás descargar en tu dispositivo móvil, en tu computadora o jugarlo de forma online sin descargar. 
          (Te recomendamos descargarlo para evitar cualquier error al cargar el juego).
          </p>

          <Carousel className="col-11 col-lg-9 mb-5 shadow-lg bg-light rounded">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide_1}
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide_2}
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide_3}
                alt="Slide 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide_4}
                alt="Slide 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide_5}
                alt="Slide 5"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </GameContainer>
      
      <Buttons>
        <IconContainer>
          <img src={iconCel} alt="icono celular"></img>
          <img src={iconFlecha} alt="icono flecha" className="icon-flecha"></img>
          <Button className='btn-cel'>Descargar</Button>
        </IconContainer>
        <IconContainer>
          <img src={iconPC} alt="icono computadora"></img>
          <img src={iconFlecha} alt="icono flecha" className="icon-flecha"></img>
          <Button className='btn-pc'>Descargar</Button>
        </IconContainer>
        <IconContainer>
          <img src={iconOnline} alt="icono online"></img>
          <img src={iconFlecha} alt="icono flecha" className="icon-flecha"></img>
          <Button className='btn-online'>Jugar</Button>
        </IconContainer>
      </Buttons>
    </>
  )
}

export default Game

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem 0 .5rem;

  .contenido {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-grey);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 90%;
    margin-bottom: 2rem;

    @media(min-width: 768px){
      width: 80%;
    }
  }

  p{
    font-size: 1.5rem;
    text-align: center;
    margin: 3rem 0;
    color: var(--grey-text);
    width: 90%;

    @media(min-width: 768px){
      width: 70%;
    }
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 2rem 0 2rem;
  gap: 2rem;

  @media(min-width: 768px){
    margin: 2rem 2rem 0 2rem;
  }

  .icon-flecha { width: 18%; }
`

const Button = styled.button`
  border: none;
  width: 12rem;
  height: 3rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--white);
  border-radius: 1rem;
  cursor: pointer;
  transition: all .5s;

  &.btn-cel{ background: var(--rojo); }
  &.btn-pc{ background: var(--amarillo); }
  &.btn-online{ background: var(--celeste); }

  &:hover{
    letter-spacing: .1rem;
  }
`