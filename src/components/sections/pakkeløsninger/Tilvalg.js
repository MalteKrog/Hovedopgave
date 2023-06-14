import React from 'react'
import './pakkeløsninger.css'
import { IoIosAddCircle } from 'react-icons/io'
import parse from 'html-react-parser'


const Tilvalg = ({ tilvalg, setSsl, ssl, api, setApi, some, setSome, branding, setBranding, tekstForfatning, setTekstForfatning, logo, setLogo }) => {


  return (
    <div className='noselect tilvalg-animation'>
        <div className='tilvalgcard'>
        <label className='label'>
                <div className='tilvalg-card-header card-header'>
                    <h5>{tilvalg.title.rendered}</h5>
                    <p>{parse(tilvalg.content.rendered)}</p>
                </div>
                <div className='pakke-detaljer'>
                    <div className='pakke-detaljer-container'>
                        <p onClick={() => setSsl(true)} style={{display: ssl ? 'none' : 'block'}}><IoIosAddCircle className='add' />{!tilvalg.acf.ssl ? null : parse(tilvalg.acf.ssl)}</p>
                        <p onClick={() => setApi(true)} style={{display: api ? 'none' : 'block'}}><IoIosAddCircle className="add" />{!tilvalg.acf.egen_api ? null : parse(tilvalg.acf.egen_api)}</p>
                        <p onClick={() => setSome(true)} style={{display: some ? 'none' : 'block'}}><IoIosAddCircle className='add' />{!tilvalg.acf.some_marketing ? null : parse(tilvalg.acf.some_marketing)}</p>
                        <p onClick={() => setBranding(true)} style={{display: branding ? 'none' : 'block'}}><IoIosAddCircle className='add' />{!tilvalg.acf.branding_identittet ? null : parse(tilvalg.acf.branding_identittet)}</p>
                        <p onClick={() => setTekstForfatning(true)} style={{display: tekstForfatning ? 'none' : 'block'}}><IoIosAddCircle className='add' />{!tilvalg.acf.tekstforfatning ? null : parse(tilvalg.acf.tekstforfatning)}</p>
                        <p onClick={() => setLogo(true)} style={{display: logo ? 'none' : 'block'}}><IoIosAddCircle className='add' />{!tilvalg.acf.logodesign ? null : parse(tilvalg.acf.logodesign)}</p>
                    </div>
                </div>
            </label>
        </div>
    </div>

  )}

export default Tilvalg