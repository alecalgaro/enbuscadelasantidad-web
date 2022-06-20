import React from 'react'
import styled from 'styled-components'

import SectionTitle from './SectionTitle'
import iconInstagram from '../img/icons/icono-instagram.webp'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <SectionTitle title="Contacto" />
        
        <p>Por cualquier consulta o sugerencia, podes comunicarte con nosotros enviando tu mensaje o escribiéndonos en nuestras redes sociales.</p>
        
        <div className='contact'>

          <div className='instagram'>
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/enbuscade.lasantidad"><img src={iconInstagram} alt="Icono instagram" className="icon"/></a>
          </div>
          
          <div className='form'>
            <h4>Formulario de contacto</h4>
            <form className="col-12 col-md-10 col-lg-8" id="formulario">
                {/* Clave para el envío con web3forms. Se puede cambiar la clave desde la página, sin registro, solo poniendo un correo */}
                <input type="hidden" name="apikey" value="8a503d3c-c02a-4a1d-a5f7-036ad98b9f94" />
                {/* Asunto al recibir el mensaje con web3forms */}
                <input type="hidden" name="from_name" value="En busca de la santidad" />

                <div class="mb-3">
                    <label for="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Tu correo" required />
                </div>
                <div class="mb-3">
                    <label for="nombre" className="form-label">Nombre</label>
                    <input type="nombre" className="form-control" id="nombre" name="nombre" placeholder="Tu nombre" required />
                </div>
                <div class="mb-3">
                    <label for="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="3" name="mensaje" placeholder="Tu mensaje" required></textarea>
                </div>
                <button type="submit" name="enviar" id="submit">Enviar</button>
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

  p{
    font-size: 1.6rem;
    color: var(--grey-text);
    width: 85%;
    text-align: center;
    margin-bottom: 2rem;

    @media(min-width: 992px){
      width: 50%;
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
      font-size: 2rem;
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
    width: 80%;
    label, input, textarea{ font-size: 1.6rem; }

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
