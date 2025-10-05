import React from 'react'
import TopNavbar from './Components/TopNavbar'
import HomePage from './Pages/HomePage'
import Products from './Pages/Products'
import ContactPage from './Pages/ContactPage'
import CerealsPage from './Pages/CerealsPage'
import AboutPage from './Pages/AboutPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' 
          element={
            <div className='container mt-4'>
              <Products />
            </div>
          } 
        />
        <Route path='/contact' 
          element={
            <div className='container mt-4'>
              <ContactPage />
            </div>} 
        />
        <Route path='/cereals' 
          element={
            <div className='container mt-4'>
              <CerealsPage />
            </div>} 
        />
        <Route path='/about' 
          element={
            <div className='container mt-4'>
              <AboutPage />
            </div>} 
        />

        
      </Routes>
    </Router>
  )
}
export default App
