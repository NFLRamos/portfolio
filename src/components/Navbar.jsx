import React from "react";
import './navbar.scss';
import { NavLink } from "react-router-dom";
//logos
import logo_w from '../Assets/logo_nuno.svg';
import linkdin from '../Assets/Frame.svg';
import github from '../Assets/Frame1.svg';
import insta from '../Assets/Frame2.svg';


function header() {
    return(
        
        <nav className="text-white flex col justify-between">
        <img src={logo_w} alt="" />
        <ul className="flex flex-col text-center wrap__menu">
            <li>
            <NavLink to='/' activeClassName="active">
            Home
            </NavLink>
            </li>
            <li className="my-5" >
            <NavLink to='/about' activeClassName="active">
            about
            </NavLink>
            </li>
            <li>
            <NavLink to='/projects' activeClassName="active">
            Projects
            </NavLink>
            </li>
            <li className="mt-5">
            <NavLink to='/contact' activeClassName="active">
            Contact
            </NavLink>
            </li>
        </ul>
        <div className="icons__wrap">          
        <a href="https://www.google.pt" target="_blank"><img src={linkdin} /></a>  
        <a href="https://www.google.pt" target="_blank"><img src={github} className="mx-5"/></a>
        <a href="https://www.google.pt" target="_blank"><img src={insta} /></a>
        </div>

        </nav>


       
    );
}

export default header;