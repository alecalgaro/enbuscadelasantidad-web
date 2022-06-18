import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({title}) => {
  return (
    <Title>{title}</Title>
  )
}

export default SectionTitle

const Title = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    margin: 5rem 0;
    letter-spacing: .2rem;
    color: var(--amarillo);
    text-shadow: 4px 3px 0px var(--rojo);
    
    @media(min-width: 768px){
      font-size: 5rem;
    }
`