import React from 'react'
import styled from 'styled-components'
import data from './data.json'

const Footer = ({i}) => {
  return (
    <FooterContainer>
        <p>
          {data[i].footer1} <br /> <a href="https://www.instagram.com/alecalgaro">{data[i].footer2}</a><a href="https://www.instagram.com/click.creando">{data[i].footer3}</a>
            <br /> <i>{data[i].footer4}</i>
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