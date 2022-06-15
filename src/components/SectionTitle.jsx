import React from 'react'
import styled from 'styled-components'

const SectionTitle = ({title}) => {
  return (
    <Title>{title}</Title>
  )
}

export default SectionTitle

const Title = styled.div`
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    margin: 3rem 0;
    letter-spacing: .2rem;
    border-bottom: 4px solid var(--amarillo);
    color: var(--black);
    text-shadow: 1px 1px 2px var(--grey);
`