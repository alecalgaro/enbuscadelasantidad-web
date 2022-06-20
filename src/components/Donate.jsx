import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

import iconDonate from '../img/icons/icono-colaborar.webp'

const Donate = () => {
  return (
    <DonateContainer id="donate">
        <SectionTitle title="Colaborar"/>

        <div className='contenido'>
            <Card>
                <img src={iconDonate} alt="Icono colaborar" />
                <h3>Mercado pago</h3>
                <p>En Argentina podes colaborar mediante la plataforma de “Cafecito.app” eligiendo el monto o mediante el CVU.</p>
                <button>Colaborar</button>
            </Card>

            <Card>
                <img src={iconDonate} alt="Icono colaborar" />
                <h3>Paypal</h3>
                <p>Fuera de Argentina podes colaborar mediante la plataforma de “Paypal” eligiendo el monto que quieras donar.</p>
                <button>Colaborar</button>
            </Card>
        </div>
    </DonateContainer>
  )
}

export default Donate

const DonateContainer = styled.section`
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

    @media(min-width: 768px){
        flex-direction: row;
    }
  }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-grey);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 80%;
    margin-bottom: 3rem;

    img{ margin: 3rem 0; }

    h3{
        font-size: 2rem;
        text-align: center;
        margin: 0;
        color: var(--grey-text);
    }

    p{ 
        font-size: 1.6rem;
        text-align: center;
        margin: 2rem; 
        color: var(--grey-text);
    }

    button{
        border: none;
        width: 12rem;
        height: 3rem;
        margin-bottom: 3rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: var(--white);
        border-radius: 1rem;
        cursor: pointer;
        background-color: var(--rojo);
        transition: all .5s;

        &:hover{
            color: var(--rojo);
            background-color: var(--white);
            border: 1px solid var(--rojo);
        }
    }

    @media(min-width: 768px){
        width: 25%;
        margin: 0 3rem;
    }
`