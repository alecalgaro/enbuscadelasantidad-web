import React, {useState} from 'react'
import styled from 'styled-components'

import imgBackgroud from '../img/fondo.webp'
import iconSpanish from '../img/icons/icon-spanish.webp'
import iconEnglish from '../img/icons/icon-english.webp'
import iconItalian from '../img/icons/icon-italian.webp'
import iconPortuguese from '../img/icons/icon-portuguese.webp'
import iconFrench from '../img/icons/icon-french.webp'
import iconLanguages from '../img/icons/icon-idiomas.png'
import data from './data.json'

import { motion } from "framer-motion"

const Header = ({i}) => {

  const saveLanguage = (language) => {
    localStorage.setItem('language', language);
    window.location.reload();   // actualiza la pagina
  }

  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      <ImageBackground src={imgBackgroud} className="img-background" alt="imagen de fondo" />
      <HeaderContainer
        id='home'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .8}}
        >
        <Logo>
          <h1><img src={data[i].img_logo} alt="logo header"/></h1>
        </Logo>

        <HeaderDescription>
          <h1>
            <span>{data[i].header1}</span><br /> 
                  {data[i].header2}
          </h1>
          <p>{data[i].header3}</p>
          
          <Buttons>
            <button><a href="https://drive.google.com/file/d/1q4pKuPM2Flax5hUr6_GQjakA33gcMS8d/view?usp=sharing" target="_blank">{data[0].btn_trailer}</a></button>
            <button><a href="#play">{data[i].btn_play}</a></button>
          </Buttons>
        </HeaderDescription>

        <Languages>
          <LanguagesButtons showIcons={showIcons}>
            <button onClick={() => saveLanguage('spanish')}><img src={iconSpanish} alt="icono español"/></button> 
            <button onClick={() => saveLanguage('english')}><img src={iconEnglish} alt="icono ingles"/></button>
            <button onClick={() => saveLanguage('italian')}><img src={iconItalian} alt="icono italiano"/></button>
            <button onClick={() => saveLanguage('portuguese')}><img src={iconPortuguese} alt="icono portugues"/></button>
            <button onClick={() => saveLanguage('french')}><img src={iconFrench} alt="icono frances"/></button>
          </LanguagesButtons>
          <button onClick={() => setShowIcons(!showIcons)}><img src={iconLanguages} alt="icono idiomas"/></button>
        </Languages>
      </HeaderContainer>
    </>
  )
}

export default Header;

const ImageBackground = styled.img`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
    object-fit: cover;
    animation: animacion-fondo 20s linear infinite alternate-reverse;

    @keyframes animacion-fondo {
    from{
      object-position: -1000px 0;
    }
    to{
      object-position: 0 0;
    }
}
`

const HeaderContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media(min-width: 992px){
    flex-direction: row-reverse;
  }
`

const Logo = styled.div`
  img {
      width: 28rem;
      animation: logo 1.85s linear infinite alternate-reverse;

      @media (min-width: 756px) {
          width: 35rem;
      }

      @media (min-width: 992px) {
          width: 50rem;
          padding: 2rem;
      }
    }

    @keyframes logo {
      from { transform: translateY(0); }
      to { transform: translateY(15px); }
    }
`

const HeaderDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.5rem;
  order: 1;

  h1{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  span{ color: var(--amarillo); }

  p{
    margin: 1.5rem 0 2rem 0;
    color: var(--grey-text);
    font-size: 1.6rem;
    text-align: center;
  }

  @media(min-width: 768px){
    width: 70%;
    
    h1{ font-size: 3rem; }

  }

  @media(min-width: 1200px){
    width: 50%;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  
  button{
    background: var(--amarillo);
    border: none;
    width: 9rem;
    height: 3rem;
    font-size: 1.8rem;
    font-weight: 300;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .3s;

    a{ color: var(--white); }

    &:hover{
      transform: scale(1.1);
    }
  } 
`

const Languages = styled.div`
  display: flex;
  position: absolute;
  top: 6rem;
  right: 2rem;

  button{
      border: none;
      background: none;
      cursor: pointer;
      transition: all .3s;

      &:hover{
        transform: scale(1.2);
      }

      img{
        width: 4rem;
      }
    }
`

const LanguagesButtons = styled.div`
    display: flex;
    gap: 1rem;
    transition: all .8s;
    margin-right: 1.5rem;
    opacity: ${(props) => (props.showIcons ? 0 : 1)};
`