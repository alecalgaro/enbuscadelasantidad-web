import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
        <p>
            Sitio web diseñado y creado por <br /> <a href="https://www.instagram.com/alecalgaro">Alejandro Calgaro</a> y <a href="https://www.instagram.com/click.creando">Guadalupe Rodriguez</a>
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
  margin: 2rem .5rem .5rem .5rem;
  border-top: 1px solid var(--amarillo);

  p{
    font-size: 1.2rem;
    text-align: center;
    color: var(--grey-text);
    margin: 2rem 2rem;
  }

  a{
    color: var(--grey-text);
  }
`