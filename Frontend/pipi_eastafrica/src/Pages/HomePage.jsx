import React from 'react'
import HeroSection from '../Components/HeroSection'
import Faq from '../Components/Faq'
import ProductExplorer from '../Components/product-explorer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ProductExplorer />
        <Faq />
  
    </div>
  )
}

export default HomePage