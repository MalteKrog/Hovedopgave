import React from 'react'
 
import '../components/sections/cases/cases.css'
import FeaturedCases from '../components/sections/cases/FeaturedCases'
import Munchen from '../components/sections/cases/Munchen'


const CasesPage = () => {
  return (
    <div>
      <FeaturedCases />
      <Munchen />
    </div>
  )
}

export default CasesPage