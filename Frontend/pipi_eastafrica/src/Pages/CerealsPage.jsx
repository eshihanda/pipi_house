import React from 'react'
import '../Styles/FruitsPage.css'
import cashewnuts from '../assets/cashewnuts.jpeg';
import yellowMaize from '../assets/yellow-maize.jpeg';
import groundnuts from '../assets/groundnuts.jpeg';
import peanuts from '../assets/peanuts.jpeg';

import { Link } from 'react-router-dom'
const CerealsPage = () => {
  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Premium Cereals</h2>
      </div>
      <div className='container'>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={cashewnuts} alt="cashewnuts" className='fruit-image' />
            <h4>Cashewnuts</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={yellowMaize} alt="Yellow Maize" className='fruit-image' />
            <h4>Yellow Maize</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={groundnuts} alt="Groundnuts" className='fruit-image' />
            <h4>Groundnuts</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={peanuts} alt="Peanuts" className='fruit-image' />
            <h4>Peanuts</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={groundnuts} alt="Groundnuts" className='fruit-image' />
            <h4>Groundnuts</h4>
          </div>
        </div>
      </div>
      <div className='back-link'>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  )
}

export default CerealsPage;