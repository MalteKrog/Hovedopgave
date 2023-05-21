import React from 'react'
import "./cases.css"
import { BsArrowRight } from "react-icons/bs"

const Munchen = () => {
    return (
        <section className='margin'>
            <h2 className='featured-titelto'>PERFORMING CITIZENSHIP</h2>
            <h3 className='featured-intro'>Ongoing Project: Coming soon!</h3>
            <a className="cases-link" href="https://twitter.com/TheatreAmateurs">
                <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C0 1.34315 1.34315 0 3 0H6V6H0V3Z"/>
                    <rect x="8" width="7" height="6"/>
                    <path d="M17 0H20C21.6569 0 23 1.34315 23 3V6H17V0Z"/>
                    <rect x="17" y="8" width="6" height="7"/>
                    <path d="M17 17H23V20C23 21.6569 21.6569 23 20 23H17V17Z"/>
                    <rect x="8" y="8" width="7" height="7"/>
                    <rect x="8" y="17" width="7" height="6"/>
                    <rect y="8" width="6" height="7"/>
                    <path d="M0 17H6V23H3C1.34315 23 0 21.6569 0 20V17Z"/>
                </svg>&nbsp; Tjek deres twitter ud &nbsp; <BsArrowRight /></a>
            <p className='cases-text'>I samarbejde med Synkronmedia udvikler vi en hjemmeside til et forskningsprojekt om amatør teater, der er støttet af University of Warwic, Ludwig Maximilian University of Munich & the European Research Counsil.</p>
        </section>
    )
}

export default Munchen