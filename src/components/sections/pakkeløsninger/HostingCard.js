import React, { useState } from 'react'
import ContactFormular from './ContactFormular'

const HostingCard = ({post, handleSubmit, hosting, setHosting, ssl, setSsl, api, setApi, some, setSome, branding, setBranding, tekstForfatning, setTekstForfatning, logo, setLogo, setPro, pro}) => {

    const [showContactDialog, setShowContactDialog] = useState(false);

  return (
    <div className='noselect hosting-options'>
    <input type="radio" id={post.acf.hosting} name="startup" />
    <div className='card selected-card'>
        <form onSubmit={handleSubmit}>
            <label  for={post.acf.tilvalg} className='label'>
                    <div className='card-header'>
                        <h5>{hosting.acf.title}</h5>
                        <p>{hosting.acf.beskrivelse}</p>
                    </div>
                    <div className='pakke-detaljer'>
                        <div>
                            <p style={{display: hosting.acf.deltaljer ? 'block' : 'none'}}>{hosting.acf.deltaljer}</p>
                        </div>
                    </div>
                    <div className='button-header' onClick={() => setPro(false)}>
                        <button className='btn' onClick={() => setShowContactDialog(true)}>Vælg</button>
                     </div>
                </label>
        </form>
    </div>
        <ContactFormular key={hosting.id} post={post} hosting={hosting} setHosting={setHosting} showContact={showContactDialog} setShowContact={setShowContactDialog} handleSubmit={handleSubmit} ssl={ssl} api={api} setapi={setApi} some={some} setSome={setSome} branding={branding} setBranding={setBranding} tekstForfatning={tekstForfatning} setTekstForfatning={setTekstForfatning} logo={logo} setLogo={setLogo} pro={pro} setPro={setPro}/>
</div>
  )
}

export default HostingCard