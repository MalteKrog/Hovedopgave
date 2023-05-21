import React from 'react'
import LandingSection from '../components/sections/landingpage/LandingSection'
import PakkeLøsnigner from '../components/sections/pakkeløsninger/PakkeLøsnigner'
import CasesPage from '../pages/CasesPage'
import Contact from './Contact'
import { Helmet } from "react-helmet"


const HomePage = () => {
  return (
    <div>
      <LandingSection /> 
      <PakkeLøsnigner id="pakkeløsninger" />
      <CasesPage />
      <Contact />
      <Helmet>
      <script src="https://www.socialintents.com/api/socialintents.1.3.js#2c9faa3588226f9801882977934b067a" async="async"></script>
      </Helmet>
    </div>
  )
}

export default HomePage