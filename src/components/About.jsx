import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

import imgAbout from '../img/about.webp'
import iconInstagram from '../img/icons/icono-instagram.webp'

const About = () => {
  return (
      <AboutContainer id='about'>
          <SectionTitle title="Nosotros"/>
          <AboutCard>
              <img src={imgAbout} alt="Foto de nosotros" />
              <div className='about-description'>
                <p>¡Hola! Somos Guadalupe Rodriguez (estudiante de Licenciatura en Diseño de la Comunicación Visual) y Alejandro Calgaro (estudiante de Ingeniería en Informática). 
                  <br /> Ambos somos animadores de la Infancia y Adolescente Misionera, que buscamos utilizar nuestros estudios y las cosas que nos gustan hacer, para evangelizar.</p>
                <div className='instagram'>
                    <a href="https://www.instagram.com/click.creando"><img src={iconInstagram} alt="Icono instagram" className="icon"/></a>
                    <a href="https://www.instagram.com/alecalgaro"><img src={iconInstagram} alt="Icono instagram" className="icon"/></a>
                </div>
              </div>
          </AboutCard>
      </AboutContainer>
  )
}

export default About;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem;
`

const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: var(--bg-grey);
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
      width: 95%;
      padding: 2rem 0;
  }

  p {
      font-size: 1.5rem;
      text-align: center;
      color: var(--grey-text);
      padding: 0 2rem 2rem 2rem;
      margin: 0;
  }

  .instagram{
    display: flex;
    justify-content: center;
    gap: 5rem;
  }

  img.icon{ 
      width: 4rem;
      padding: 0 0 2rem 0; 
    }

  @media(min-width: 576px){
    width: 60%;
  }

  @media(min-width: 992px){
    width: 80%;
    flex-direction: row;

    img{ 
      width: 50%; 
      padding: 2rem;
    }

    p { 
        font-size: 1.5rem; 
        width: 100%;
        padding: 2rem;
        margin: 0;
    }

    .about-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`
