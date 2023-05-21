import React from 'react'
import MødTeamet from '../components/mødteamet/MødTeamet'
import './omos.css'

const OmosPage = () => {
  return (
    <div>
      <div className='omos-container'>
        <div className='NLM-tekst'>
          <h2>Next Level Media</h2>
          <p>Vi er et digitalt webbureau med hovedsæde i Aarhus, som med flere års erfaring brænder for at skabe unikke og professionelle hjemmesider. Vi skiller os ud fra mængden ved, at alle vores digitale løsninger er bygget op fra bunden. Det betyder, at det kun er fantasien som sætter grænser, når vi udvikler og designer en hjemmeside til jer.</p>
        </div>
        <div className='vision-tekst'>
          <h2>VORES VISION</h2>
          <p>Vi ønsker at skabe unikke hjemmeside løsninger, som ingen har set før. Vi vil være med til at nytænke, hvordan en hjemmeside kan udvikles og designes.  Vi vil være det firma som virksomheder tænker på, når de vil have skræddersyet løsninger, som styrker deres brand og identitet. Unikke virksomheder kræver unikke løsninger. </p>
        </div>
      <div className='team-container'>
        <h2>Mød teamet</h2>
        <p>Vi tilbyder forskellige løsninger til netop din virksomhed</p>
        <MødTeamet />
      </div>
      </div>

    </div>
  )
}

export default OmosPage