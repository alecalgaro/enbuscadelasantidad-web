import React, {useState} from 'react'
import styled from 'styled-components'
import data from './data.json'

const Cookies = ({i}) => {

  const [cookies, setCookies] = useState(true);

  const saveCookies = () => {
    localStorage.setItem('cookies', 'accept');
    setCookies(false)
  }

  return (
    <>
      {cookies ?
        <Container>
            <div className='cookies'>
              <p>{data[i].cookies}</p>
              <div className='buttons'>
                <button onClick={() => saveCookies()}>{data[i].accept}</button>
                <button><a href="">{data[i].more}</a></button>
              </div>
            </div>
        </Container>
        : null
      }
    </>
  )
}

export default Cookies

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin: 1rem 0;
  z-index: 9;

  .cookies{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--celeste);
    opacity: .9;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 80%;
    padding: 1rem;

    @media(min-width: 768px){
      width: 50vw;
    }

    @media(min-width: 992px){
      flex-direction: row;
    }

    p{
      text-align: center;
      font-size: 1.5rem;
      color: var(--grey-text);
      margin-right: 2rem;
    }
    
    .buttons{
      display: flex;
      align-items: center;
      gap: 4rem;

      @media(min-width: 992px){
        gap: 2rem;
      }

      button{
        background: var(--amarillo);
        border: none;
        width: 8rem;
        height: 3rem;
        font-size: 1.4rem;
        color: var(--white);
        border-radius: 1rem;
        cursor: pointer;
      }

      a{
        color: var(--white);
      }
    }
  }
`