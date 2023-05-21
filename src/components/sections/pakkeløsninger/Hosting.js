import React from 'react'
import parse from 'html-react-parser'
import {FiCheck} from 'react-icons/fi'
import HostingCard from './HostingCard'
import {MdKeyboardBackspace} from 'react-icons/md'
import {IoIosRemoveCircle} from 'react-icons/io'

function Hosting({show, setShow, post, handleSubmit, ssl, setSsl, api, setApi, some, setSome, branding, setBranding, tekstForfatning, setTekstForfatning, logo, setLogo, pro, setPro, hostings, setHostings}) {

    

    // const valgtHostingPakke = post.acf.hostingpakkenavn;


  return (

        <dialog className='hosting-popup' open={show}>
            <div className='popup-header'>
                <button onClick={() => setShow(false)}><MdKeyboardBackspace /> Tilbage</button>
                <h2>Hosting Løsninger</h2>
                <p>Vælg den hostingplan, der passer til din virksomhed</p>
            </div>
            <div className='hosting-pakker-container'>

                {/* Hosting pakker */}
                    {hostings.map((hosting) => (
                    <HostingCard key={hosting.id} hosting={hosting} setHosting={setHostings} post={post} handleSubmit={handleSubmit} ssl={ssl} pro={pro} api={api} setapi={setApi} some={some} setSome={setSome} branding={branding} setBranding={setBranding} tekstForfatning={tekstForfatning} setTekstForfatning={setTekstForfatning} logo={logo} setLogo={setLogo} setPro={setPro} />
                ))}

            

            </div>
        </dialog>
  )
}

export default Hosting