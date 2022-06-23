import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import data from './data.json'
import iconDonate from '../img/icons/icono-colaborar.webp'

const Donate = ({i}) => {
  return (
    <DonateContainer id="donate">
        <SectionTitle title={data[i].title_donate}/>

        <p className='description'>{data[i].donate}</p>

        <div className='contenido'>
            <Card>
                <img src={iconDonate} alt="Icono colaborar" />
                <h3>{data[i].mercado_pago}</h3>
                <p>{data[i].mercado_pago2}</p>
                <button>{data[i].title_donate}</button>
            </Card>

            <Card>
                <img src={iconDonate} alt="Icono colaborar" />
                <h3>{data[i].paypal}</h3>
                <p>{data[i].paypal2}</p>
                <button>{data[i].title_donate}</button>
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

  .description{
    font-size: 1.6rem;
    color: var(--grey-text);
    width: 85%;
    text-align: center;
    margin-bottom: 2rem;

    @media(min-width: 992px){
      width: 50%;
    }
  }

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