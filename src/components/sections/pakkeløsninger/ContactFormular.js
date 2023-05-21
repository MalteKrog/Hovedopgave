import React from 'react'
import parse from 'html-react-parser'
import {FiCheck} from 'react-icons/fi'
import {MdKeyboardBackspace} from 'react-icons/md'
import {IoIosRemoveCircle} from 'react-icons/io'


const ContactFormular = ({showContact, setShowContact, handleSubmit, post, hosting, ssl, setSsl, api, setApi, some, setSome, branding, setBranding, tekstForfatning, setTekstForfatning, logo, setLogo,}) => {
  return (
    <dialog className='contact-popup' open={showContact}>
    <div className='popup-header'>
        <button onClick={() => setShowContact(false)}><MdKeyboardBackspace />Tilbage</button>
        <h2>Vi glæder os til samarbejdet!</h2>
        <p>Lad os få lavet den fedeste hjemmeside til din virksomhed! Udfyldt felterne og så vender vi tilbage indenfor 24 timer. </p>
    </div>

    <div className='contact-container'>
        <div className='noselect valgt-pakke-hosting'>
            <form onSubmit={handleSubmit}>
                <label  for={post.acf.tilvalg} className='label'>
                        <div className='card-header'>
                            <h5>Din Pakkeløsning: {parse(post.acf.pakkenavn)}</h5>
                        </div>
                        <div className='pakke-detaljer'>
                            <div>
                                <p style={{display: post.acf.pakkeydelseet ? 'block' : 'none'}}><FiCheck className='check'/> {parse(post.acf.pakkeydelseet)}</p>
                                <p style={{display: post.acf.pakkeydelseto ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelseto)}</p>
                                <p style={{display: post.acf.pakkeydelsetre ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelsetre)}</p>
                                <p style={{display: post.acf.pakkeydelsefire ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelsefire)}</p>
                                <p style={{display: post.acf.pakkeydelsefem ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelsefem)}</p>
                                <p style={{display: post.acf.pakkeydelseseks ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelseseks)}</p>
                                <p style={{display: post.acf.pakkeydelsesyv ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelsesyv)}</p>
                                <p style={{display: post.acf.pakkeydelseotte ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelseotte)}</p>
                                <p style={{display: post.acf.pakkeydelseni ? 'block' : 'none'}}><FiCheck className='check'/>{parse(post.acf.pakkeydelseni)}</p>
                            </div>
                        </div>
                        <br />
                        <h4>Dine tilvalg</h4>
                                <p onClick={() => setSsl(false)} style={{display: ssl ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>SSL certifikat</p>
                                <p onClick={() => setApi(false)} style={{display: api ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Egen API</p>
                                <p onClick={() => setSome(false)} style={{display: some ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>SoMe Marketing</p>
                                <p onClick={() => setBranding(false)} style={{display: branding ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Branding og Visuel identittet</p>
                                <p onClick={() => setTekstForfatning(false)} style={{display: tekstForfatning ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>tekstForfatning</p>
                                <p onClick={() => setLogo(false)} style={{display: logo ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Logo design</p>

                    </label>
            </form>
            <div className='card-header'>
                <h5>Din hosting pakke: {hosting.acf.title}</h5>
            </div>


        </div>

        <form className="contact-form" method="POST"  action="contact-form-handle.php">
            <input name='valgtpakke' type='text' className="form-control hidden" placeholder='Skriv dit navn/firma' value={'Brugeren har valgt pakkeløsningen ' + post.acf.pakkenavn + ' og hostingpakken ' + hosting.acf.title } required />
            <br />
            <input name='name' type='text' className="form-control" placeholder='Skriv dit navn/firma' required />
            <br />
            <input name="email" type="email" className="form-control" placeholder="Your e-mail" required />
            <br/>
            <textarea name="message" className="form-control" rows="8" placeholder="Tell us about your project" required></textarea>
            <br/>
            <button type="submit" name="submit" id="btn" className="submit" value="Submit ">Submit</button>
        </form>
    </div>

</dialog>
  )
}

export default ContactFormular