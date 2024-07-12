import React from 'react'
// SASS
import "./homepage.scss";
import "../global_css.scss";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Topline } from "../components/Topline";
import { Botline } from "../components/Botline";
import { ButtonContact } from "../components/ButtonContact";
import { ButtonProjects } from '../components/ButtonProjects';
import { SlickIcons } from '../components/SlickIcons';
import img_home from "../Assets/img_home.svg";


let ini_para = "<p>";
let final_para = "</p>";



export const Homepage = () => {

  const [text] = useTypewriter({
    words: ['Frontend Web Developer', 'Wordpress Developer', 'Web Design Apprentice'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  return (
    <>
      <div className='wrapping'>
        <div className='wrap__div '>
          <div className='div__left'>
            <Topline />
            <div className='wrap__content_left'>
              <h1>Hi,<br />My name is <span>Nuno</span>,<br />I'm a <span>Web Developer</span></h1>
              <p>{ini_para}</p>
               <span className='typed__text'>{text} <Cursor cursorColor="#000" /></span>
              <p>{final_para}</p>
              <div className='mt-5 flex'>
                <ButtonContact />
                <ButtonProjects />
              </div>
            </div>
          </div>
          <div className='div__right'>
            <img src={img_home} alt="" />
            <Botline />
          </div>
        </div>
        <div className='fundo__icons'>
        <SlickIcons/>
        </div>
      </div>

    </>

  )
}
