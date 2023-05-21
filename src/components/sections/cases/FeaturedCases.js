import React from 'react'
import "./cases.css"
import { BsArrowRight } from "react-icons/bs"

const FeaturedCases = () => {
    return (
        <section id="cases">
            <h2 className='featured-titel'>SYNKRON</h2>
            <h3 className='featured-intro'>Featured Project Synkron Media</h3>
            <a className="cases-link" href="https://synkronmedia.com/">
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
                </svg>&nbsp; Tjek deres hjemmeside ud &nbsp; <BsArrowRight /></a>
            <p className='cases-text'>Vi har hjulpet Synkron Media med, at formidle deres vision og produkt, i et digitalt format uden grænser. Deres online tilstedeværelse har uden tvivl gjort forskel</p>
            <div className='card-container'>
                <div className='reach-container'>
                    <h4 className='reach'>Reach</h4>
                    <div className='cards'>
                        <h4>+2500</h4>
                        <p>Besøgende</p>
                    </div>
                    <div className='cards'>
                        <h4>+50</h4>
                        <p>Lande</p>
                    </div>
                </div>

                <div className='reach-container'>
                    <h4 className='reach'>Split</h4>
                    <div className='cards'>
                        <h4>%76</h4>
                        <p>Computer</p>
                    </div>
                    <div className='cards'>
                        <h4>%24</h4>
                        <p>Mobil</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCases