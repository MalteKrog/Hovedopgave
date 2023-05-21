import React from 'react'
import './landingpage.css'
import FpBg from './FpBg'

const LandingSection = () => {
  return (
    <div className='bg-container'>
        <FpBg className="bg"/>
        <div className='flex-container'>
            <h1><span className='gradient'>Creativity</span> has no limits.<br/> <br/> Why should we?</h1>
            <div className="flexbox">
                <p>Et webbeureau der bygger hjemmesider <br/>til de fedeste virksomheder</p>
                <a href="#kontakt-os">
                  <button className='btn'>Kontakt os</button>
                </a>              
            </div>
        </div>
    </div>
  )
}

export default LandingSection