import React from 'react'
import '../Styles/FruitsPage.css'
import cranberryBeans from '../assets/cranberry-beans.jpeg';
import kazuriBeans from '../assets/Kazuri-beans.jpeg';
import kidneyBeans from '../assets/kidney-beans.jpeg';
import yellowBeans from '../assets/yellow-beans.webp';
import blackBeans from '../assets/black-beans.webp';
import navyBeans from '../assets/Navy-Beans.jpg';

import { Link } from 'react-router-dom'
const LegumesPage = () => {
  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Nutritious Legumes</h2>
      </div>
      <div className='container'>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={cranberryBeans} alt="Cranberry Beans" className='fruit-image' />
            <h4>Cranberry Beans</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={kazuriBeans} alt="Kazuri Beans" className='fruit-image' />
            <h4>Kazuri Beans</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={blackBeans} alt="Black Beans" className='fruit-image' />
            <h4>Black Beans</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={yellowBeans} alt="Yellow Beans" className='fruit-image' />
            <h4>Yellow Beans</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={kidneyBeans} alt="Kidney Beans" className='fruit-image' />
            <h4>Kidney Beans</h4>
          </div>
        </div>
		<div className='fruit-item'>
          <div className='fruit-content'>
            <img src={navyBeans} alt="Navy Beans" className='fruit-image' />
            <h4>Navy Beans</h4>
          </div>
        </div>
      </div>
      <div className='back-link'>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  )
}

export default LegumesPage;