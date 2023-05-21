import React from 'react'
import "./cases.css"
import img1 from "../../../assets/identityassets/NLM-LOGO-HVID-no-text.png"

const Customized = () => {
    return (
        <section className='custom-section'>
            <div className='custom-flexbox'>
                <div className='text-box'>
                    <h2 className='text-one'>Customized</h2>
                    <h2 className='text-two'>Contact</h2>
                    <h2 className='text-three'>Form</h2>
                </div>
                <div className='img-box'>
                    <img className='template-img' src={img1} alt="skrt" />
                </div>
                <div className='line'></div>
                <div className='custom-text-box'>
                    <p className='custom-text'>Vi ønsker at skabe unikke hjemmeside løsninger, derfor skræddersyede vi Synkron Medias kontaktformular. Til ligepræcis deres identitet og behov.</p>
                </div>
            </div>
        </section>
    )
}

export default Customized