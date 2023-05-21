import React from 'react'
import Mikkel from '../../assets/identityassets/Mikkel.jpeg'
import Frede from '../../assets/identityassets/Frederik.jpeg'
import Matty from '../../assets/identityassets/Matty.jpeg'
const MødTeamet = () => {
  return (
    <div className='team'>

        <div className='member'>
            <img className="profile-img" src={Mikkel} alt="2"/>
            <p>Mikkel Werner jansen</p>
            <p>UX Designer</p>
        </div>
        <div className="member">
            <img className="profile-img" src={Matty} alt="2"/>
            <p>Mathias Quist Michaelsen</p>
            <p>Frontend: Vuejs</p>
        </div>

        <div className="member">
            <img className="profile-img" src={Frede} alt="2"/>
            <p>Frederik Schmidt</p>
            <p>UX Designer</p>
        </div>

        
    </div>
  )
}

export default MødTeamet