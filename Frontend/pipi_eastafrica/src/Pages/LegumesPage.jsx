import React from 'react'
import '../Styles/FruitsPage.css'
import pineapple from '../assets/pineapple(2).jpeg';
import avocados from '../assets/avocados(2).jpeg';
import mangoes from '../assets/mangoes(3).jpeg';

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
            <img src={pineapple} alt="Pineapple" className='fruit-image' />
            <h4>Pineapples</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={mangoes} alt="Mangoes" className='fruit-image' />
            <h4>Mangoes</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={avocados} alt="Avocado" className='fruit-image' />
            <h4>Avocados</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={pineapple} alt="Banana" className='fruit-image' />
            <h4>Bananas</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={pineapple} alt="Passion Fruit" className='fruit-image' />
            <h4>Passion Fruits</h4>
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