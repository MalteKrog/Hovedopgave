import React from 'react'
import ERC from '../../../assets/PerformingCiti-Logos/LOGO_ERC-FLAG_EU.png'
import Warwick from '../../../assets/PerformingCiti-Logos/Warwick.png'
import LMU from '../../../assets/PerformingCiti-Logos/LMU_Logo_White.png'

const LogoBox = () => {
  return (
    <article className='logo-box'>
        <img className="PC-logo" src={ERC} alt='ERC'></img>
        <img className="PC-logo" src={Warwick} alt='Warwick'></img>
        <img className="PC-logo" src={LMU} alt='LMU'></img>
    </article>
  )
}

export default LogoBox