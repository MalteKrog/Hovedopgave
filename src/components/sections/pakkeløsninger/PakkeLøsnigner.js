import React from 'react'
import './pakkeløsninger.css'
import { useEffect, useState } from 'react'
import Card from './Card'
import Tilvalg from './Tilvalg'


const PakkeLøsnigner = () => {

    const [posts, setPosts] = useState([]);
    const [tilvalgs, setTilvalgs] = useState([]);
    const [hostings, setHostings] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.reactapi.nextlevelmedia.dk/wp-json/wp/v2/posts?_embed");
            const responsetwo = await fetch("https://wordpress.reactapi.nextlevelmedia.dk/wp-json/wp/v2/tilvalg?_embed");
            const responsethree = await fetch("https://wordpress.reactapi.nextlevelmedia.dk/wp-json/wp/v2/hosting?_embed");
            const data = await response.json();
            const datatwo = await responsetwo.json();
            const datathree = await responsethree.json();
            console.log(data);
            console.log(datathree);
            setPosts(data);
            setTilvalgs(datatwo);
            setHostings(datathree);
        }
        getData();
    }, []);

    // valgt Hosting Pakke
    const [pro, setPro] = useState(true)

    // tilvalg
    const [ssl, setSsl] = useState(false)
    const [api, setApi] = useState(false)
    const [some, setSome] = useState(false)
    const [branding, setBranding] = useState(false)
    const [tekstForfatning, setTekstForfatning] = useState(false)
    const [logo, setLogo] = useState(false)
    
  return (
    <section id="pakkeløsninger">
        <h2>Pakkeløsnigner</h2>
        <p>Vi tilbyder forskellige løsninger til netop din virksomhed</p>
       
        <div className='cards-container'>
        {posts.map(post => (
          <Card post={post} ssl={ssl} setSsl={setSsl} api={api} setApi={setApi} some={some} setSome={setSome} branding={branding} setBranding={setBranding} tekstForfatning={tekstForfatning} setTekstForfatning={setTekstForfatning} logo={logo} setLogo={setLogo} hostings={hostings} setHostings={setHostings} pro={pro} setPro={setPro} />
          ))}
        </div>
          {tilvalgs.map(tilvalg => (
              <Tilvalg key={tilvalg.id} tilvalg={tilvalg} ssl={ssl} setSsl={setSsl} api={api} setApi={setApi} some={some} setSome={setSome} branding={branding} setBranding={setBranding} tekstForfatning={tekstForfatning} setTekstForfatning={setTekstForfatning} logo={logo} setLogo={setLogo}/>
          ))}

    </section>
  )
}

export default PakkeLøsnigner