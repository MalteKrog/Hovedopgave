import React from 'react'
import "./cases.css"
import { useState } from "react"

import { HiOutlineDesktopComputer } from "react-icons/hi"
import { BiMobileAlt } from "react-icons/bi"
import img1 from "../../../assets/identityassets/NLM-LOGO-HVID-no-text.png"
import img2 from "../../../assets/identityassets/NLM-LOGO-HVID-text.png"

const Responsive = () => {
    const [active, setActive] = useState("mobile-box");
    const [activetwo, setActivetwo] = useState("pc-box");

    const mobileToggle = () => {
        active === "mobile-box"
            ? setActive("mobile-box-active")
            : setActive("mobile-box-active")
        activetwo === "pc-box"
            ? setActivetwo("pc-box")
            : setActivetwo("pc-box")
    }
    const pcToggle = () => {
        activetwo === "pc-box"
            ? setActivetwo("pc-box pc-box-active")
            : setActivetwo("pc-box pc-box-active")

        active === "mobile-box"
            ? setActive("mobile-box-inactive")
            : setActive("mobile-box-inactive")
    }

    return (
        <section className='responsive-section'>
            <div className='responsive-flex'>
                <h2 className='responsive-titel'>Vores designs er altid responsive</h2>
                <div className='reponsive-icons'>
                    <div className='icon-box' onClick={mobileToggle}>
                        <BiMobileAlt className='svg-icon' />
                    </div>
                    <div className='icon-box' onClick={pcToggle}>
                        <HiOutlineDesktopComputer className='svg-icon' />
                    </div>
                </div>
                <div className='responsive-img'>
                    <div className={active}>
                        <img className='template-img' src={img1} alt="skrt" />
                    </div>
                    <div className={activetwo}>
                        <img className='template-img' src={img2} alt="skrt" />
                    </div>
                </div>
                <p className='responsive-text'>Uanset hvilken pakke du vælger, får du en hjemmeside, der er kompatibel med både computer og mobil!</p>
            </div>
        </section>
    )
}

export default Responsive