import React from 'react'
import TopNavbar from './Components/TopNavbar'
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import ContactPage from './Pages/ContactPage'
import CerealsPage from './Pages/CerealsPage'
import LegumesPage from './Pages/LegumesPage'
import AboutPage from './Pages/AboutPage'
import FruitsPage from './Pages/FruitsPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' 
          element={
            <div>
              <Products />
            </div>
          } 
        />
        <Route path='/contact' 
          element={
            <div>
              <ContactPage />
            </div>} 
        />
        <Route path='/about-us'
          element={
            <div>
              <AboutPage />
            </div>} 
        />
        <Route path='/products/fruits' 
          element={
            <div>
              <FruitsPage />
            </div>} 
        />
        <Route path='/products/cereals' 
          element={
            <div>
              <CerealsPage />
            </div>} 
        />
        <Route path='/products/legumes' 
          element={
            <div>
              <LegumesPage />
            </div>} 
        />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
