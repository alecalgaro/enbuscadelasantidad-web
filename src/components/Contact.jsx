import React from 'react'
import styled from 'styled-components'
import data from './data.json'
import SectionTitle from './SectionTitle'
import iconInstagram from '../img/icons/icon-instagram.png'

const Contact = ({i}) => {
  return (
    <ContactContainer id="contact">
        <SectionTitle title={data[i].title_contact} />
        
        <div className='description'><p>{data[i].contact}</p></div>
        
        <div className='contact'>

          <div className='instagram'>
            <h4>{data[i].instagram}</h4>
            <a href="https://www.instagram.com/enbuscade.lasantidad"><img src={iconInstagram} alt="Icono instagram" className="icon"/></a>
          </div>
          
          <div className='form'>
            <h4>{data[i].form}</h4>
            <form className="col-12 col-md-10 col-lg-8" id="formulario" action="https://api.web3forms.com/submit" method="POST">
                {/* Clave para el envío con web3forms. Se puede cambiar la clave desde la página, sin registro, solo poniendo un correo */}
                <input type="hidden" name="apikey" value="51989a6a-ecd8-4307-ac13-4ed6e2251bd3" />
                {/* Asunto al recibir el mensaje con web3forms */}
                <input type="hidden" name="from_name" value="En busca de la santidad" />

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">{data[i].email}</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder={data[i].email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">{data[i].name}</label>
                    <input type="nombre" className="form-control" id="nombre" name="nombre" placeholder={data[i].name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">{data[i].message}</label>
                    <textarea className="form-control" id="mensaje" rows="3" name="mensaje" placeholder={data[i].message} required></textarea>
                </div>
                <input type="hidden" name="redirect" value="http://localhost:3000/#contact"></input>
                <button type="submit" name="enviar" id="submit">{data[i].send}</button>
            </form>
          </div>
        </div>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-grey);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 80%;
    margin-bottom: 2rem;
    
    @media(min-width: 768px){
        width: 50%;
    }

    p{
      font-size: 1.6rem;
      color: var(--grey-text);
      text-align: center;
      margin: 1rem;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    /* background-color: var(--bg-grey);
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */

    @media(min-width: 992px){
      flex-direction: row;
      align-items: flex-start;
      width: 70%;
    }

    h4{
      font-size: 2.4rem;
      color: var(--amarillo);
      margin-bottom: 2rem;
      text-align: center;
    }

    .instagram {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
    }
  }

  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    label, input, textarea{ font-size: 1.5rem; }

    @media(min-width: 992px){
      width: 60%;
    }

    button{
      background: var(--amarillo);
      border: none;
      width: 9rem;
      height: 3rem;
      font-size: 1.8rem;
      font-weight: 300;
      border-radius: 1rem;
      color: var(--white);
      cursor: pointer;
      transition: all .5s;

      &:hover{
        letter-spacing: .2rem;
      }
    }
  }

  
`
