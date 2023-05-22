import React, {useState} from 'react'
import './pakkeløsninger.css'
import { TiTick } from 'react-icons/ti'


const Tilvalg = () => {
    const [option, setOption] = useState("Startup")

  const onOptionChange = e => {
    setOption(e.target.value)
  }
  return (
    <section className='noselect tilvalg-animation'>
        <div className='tilvalgcard'>
            <input
            type="radio"
            name="topping"
            value="Startup"
            id="startup"
            checked={option === "Startup"}
            onChange={onOptionChange}
            />
            <label htmlFor="startup" className='card-title'>Startup</label>
            <div className='card-line'></div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hjemmeside med 1-3 undersider</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Udviklet prototype i Fgima</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Basic SEO pakke</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hosting af hjemmeside</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>6 Måneders vedligholdse og
                    performance</p>
            </div>
            <div className='card-line'></div>
            <button className='btn'>Vælg pakke</button>
        </div>
        <div className='tilvalgcard'>
        <input
            type="radio"
            name="topping"
            value="Enterprise"
            id="enterprise"
            checked={option === "Enterprise"}
            onChange={onOptionChange}
        />
         <label htmlFor="enterprise" className='card-title'>Enterprise</label>
         <div className='card-line'></div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hjemmeside med 1-8 undersider</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Udviklet prototype i Figma</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Pro SEO Pakke</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hosting af hjemmeside</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>6 Måneders vedligholdse og performance</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>CMS System</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>9-17  Teknisk Support</p>
            </div>
            <div className='card-line'></div>
            <button className='btn'>Vælg pakke</button>
        </div>
        <div className='tilvalgcard'>
            <input
                type="radio"
                name="topping"
                value="Imperial"
                id="imperial"
                checked={option === "Imperial"}
                onChange={onOptionChange}
            />
            <label htmlFor="imperial" className='card-title'>Imperial</label>
            <div className='card-line'></div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hjemmeside med ubegrænsede undersider</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Udviklet prototype i Figma</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Pro SEO Pakke</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Hosting af hjemmeside</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>6 Måneders vedligholdse og performance</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>CMS System</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>24/7  Teknisk Support</p>
            </div>
            <div className='tilvalg'>
                <TiTick className='TiTick'/>
                <p>Mindre updateringer indenfor 24 timer</p>
            </div>
            <div className='card-line'></div>
            <button className='btn'>Vælg pakke</button>
        </div>
        <div className='tilvalgcard'>
            <p>
                Valgt pakke:<strong> {option}</strong>
            </p>
        </div>
        
    </section>

  )}

export default Tilvalg