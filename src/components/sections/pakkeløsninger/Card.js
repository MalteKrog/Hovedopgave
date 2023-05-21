import React from 'react'
import './pakkeløsninger.css'
import { FiCheck } from 'react-icons/fi'
import { IoIosRemoveCircle } from 'react-icons/io'
import parse from 'html-react-parser'
import { useState } from "react";
import Hosting from './Hosting'


const Card = ({ post, ssl, setSsl, api, setApi, some, setSome, branding, setBranding, tekstForfatning, setTekstForfatning, logo, setLogo, pro, setPro, hostings, setHostings }) => {

    const [showDialog, setShowDialog] = useState(false);

    const valgtPakke = post.acf.pakkenavn;

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    }

  return (
    <div className='card-animation'>
        <input type="radio" id={post.acf.tilvalg} name="startup" />
            <div className='populær' style={{visibility: post.acf.populaer ==="true" ? 'block' : 'hidden'}}>Populær</div>
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <label  for={post.acf.tilvalg} className='label'>
                        <div className='card-header'>
                            <h5>{parse(post.acf.pakkenavn)}</h5>
                            <p>{parse(post.acf.pakkebeskrivelse)}</p>
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
                        <h4>Tilvalg</h4>
                                <br />
                                <p className='valgte-tilvalg' onClick={() => setSsl(false)} style={{display: ssl ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>SSL certifikat</p>
                                <p className='valgte-tilvalg' onClick={() => setApi(false)} style={{display: api ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Egen API</p>
                                <p className='valgte-tilvalg' onClick={() => setSome(false)} style={{display: some ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>SoMe Marketing</p>
                                <p className='valgte-tilvalg' onClick={() => setBranding(false)} style={{display: branding ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Branding og Visuel identittet</p>
                                <p className='valgte-tilvalg' onClick={() => setTekstForfatning(false)} style={{display: tekstForfatning ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Tekst Forfatning</p>
                                <p className='valgte-tilvalg' onClick={() => setLogo(false)} style={{display: logo ? 'block' : 'none'}}><IoIosRemoveCircle className='check'/>Logo design</p>
                        <div className='button-header'>
                            <button className='btn' onClick={() => setShowDialog(true)}>Kom i gang</button>
                        </div>
                    </label>
            </form>
        </div>
        <Hosting hostings={hostings} setHostings={setHostings} valgtPakke={valgtPakke} post={post} show={showDialog} setShow={setShowDialog} handleSubmit={handleSubmit} ssl={ssl}  api={api} setapi={setApi} some={some} setSome={setSome} branding={branding} setBranding={setBranding} tekstForfatning={tekstForfatning} setTekstForfatning={setTekstForfatning} logo={logo} setLogo={setLogo}  pro={pro} setPro={setPro} />
    </div>

  )}

export default Card