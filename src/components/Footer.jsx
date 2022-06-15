import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <p>
            Sitio web diseñado y creado por <br /> Alejandro Calgaro y Guadalupe Rodriguez
            <br /> <i>Se reserva el uso del contenido del videojuego y de este sitio web solo para fines pastorales.</i>
        </p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 .5rem 5rem .5rem;

  p{
    font-size: 1.2rem;
    text-align: center;
    color: var(--grey-text);
  }
`