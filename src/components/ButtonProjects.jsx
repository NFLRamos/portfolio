import React from 'react'
import "./button_projects.scss"
import { NavLink } from "react-router-dom";

export const ButtonProjects = () => {
  return (
    <div className='projects__button'>
      <NavLink to="/projects">
      <button to="/projects">Projects</button>
      </NavLink>
     
    </div>
  )
}
