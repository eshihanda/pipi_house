import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopNavbar from './Components/TopNavbar'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import ProductExplorer from './Components/product-explorer'
const App = () => {
  return (
    <div>
      <TopNavbar />
      <ProductExplorer />
      <Faq />
      <Footer />
    </div>
  )
}
export default App
