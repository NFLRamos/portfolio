import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slick_icons.scss'; 
//icons
import frame_html from "../Assets/frame_html.svg";
import frame_css from "../Assets/frame_css.svg";
import frame_js from "../Assets/frame_js.svg";
import frame_boot from "../Assets/frame_boot.svg";
import frame_figma from "../Assets/frame_figma.svg";
import frame_react from "../Assets/frame_react.svg";
import frame_sass from "../Assets/frame_sass.svg";
import frame_wp from "../Assets/frame_wp.svg";
//icons



export const SlickIcons = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (

    <div className="slider-container ">
      <div className='flex justify-center '>
        <Slider {...settings}>
          <div className='frame__icons'>
            <img src={frame_html} alt="" />
            <p>HTML</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_css} alt="" />
            <p>CSS</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_sass} alt="" />
            <p>SaSS</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_js} alt="" />
            <p>JavaScript</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_wp} alt="" />
            <p>Wordpress</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_boot} alt="" />
            <p>Bootsrap</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_figma} alt="" />
            <p>Figma</p>
            </div>
            <div className='frame__icons'>
            <img src={frame_react} alt="" />
            <p>React</p>
            </div>
          
        </Slider>
      </div>
    </div>


  );
};
