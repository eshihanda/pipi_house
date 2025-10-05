import React from 'react'
import HeroSection from '../Components/HeroSection'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import ProductExplorer from '../Components/product-explorer'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <ProductExplorer />
        <Faq />
        <Footer />
    </div>
  )
}

export default HomePage