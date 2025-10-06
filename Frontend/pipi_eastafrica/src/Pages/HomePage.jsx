import React from 'react'
import HeroSection from '../Components/HeroSection'
import Faq from '../Components/Faq'
import ProductExplorer from '../Components/product-explorer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Testimonials from '../Components/Testimonials'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ProductExplorer />
        <Testimonials />
        <Faq />
    </div>
  )
}

export default HomePage