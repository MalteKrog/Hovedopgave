import React from 'react';

import {NavLink} from 'react-router-dom';
import { useState } from "react";

import './nav.css';

import NlmWhiteShortText from '../../assets/identityassets/NLM-White-text.png'

const Nav = () => {
  const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");
    const [activeNav, setActiveNav] = useState('#');

    const navToggle = () => {
        active === "nav-menu" 
        ? setActive("nav-menu nav-active")
        : setActive("nav-menu");

        toggleIcon === "nav-toggler"
        ? setToggleIcon("nav-toggler toggle")
        : setToggleIcon("nav-toggler");
    };
  return (
  <header>
    <NavLink to="/" className='nav-logo-container'>
      <img className='nav-logo' src={NlmWhiteShortText} alt="NLM Logo"/>
    </NavLink>
        <nav>
          <div className={active}>
            <a href="#pakkeløsninger" onClick={() => setActiveNav('#services')} className={activeNav === '#pakkeløsninger' ? 'active' : ''}>Pakkeløsninger</a>

            <a href="#cases" onClick={() => setActiveNav('#cases')} className={activeNav === '#cases' ? 'active' : ''}>Cases</a>
            <NavLink to="/om-os" >Om os</NavLink>
    
          </div>
          <div onClick={navToggle} className={toggleIcon}>
              <div className="lineone"></div>
              <div className="linetwo"></div>
              <div className="linethree"></div>
          </div>  
        </nav>
    </header>
  )
}

export default Nav