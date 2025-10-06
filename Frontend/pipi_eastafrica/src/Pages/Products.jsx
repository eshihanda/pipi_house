import React from 'react'
import '../Styles/FruitsPage.css'
import pineapple from '../assets/pineapple(2).jpeg';
import avocados from '../assets/avocados(2).jpeg';
import mangoes from '../assets/mangoes(3).jpeg';
import bananas from '../assets/banana.webp';
import cranberryBeans from '../assets/cranberry-beans.jpeg';
import kazuriBeans from '../assets/Kazuri-beans.jpeg';
import kidneyBeans from '../assets/kidney-beans.jpeg';
import yellowBeans from '../assets/yellow-beans.webp';
import blackBeans from '../assets/black-beans.webp';
import navyBeans from '../assets/Navy-Beans.jpg';
import cashewnuts from '../assets/cashewnuts.jpeg';
import yellowMaize from '../assets/yellow-maize.jpeg';
import groundnuts from '../assets/groundnuts.jpeg';
import peanuts from '../assets/peanuts.jpeg';
import passion from '../assets/passion-fruit.webp';

import { Link } from 'react-router-dom'


const FruitsPage = () => {
  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Our Products</h2>
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
            <img src={bananas} alt="Banana" className='fruit-image' />
            <h4>Bananas</h4>
          </div>
        </div>
        <div className='fruit-item'>
          <div className='fruit-content'>
            <img src={passion} alt="Passion Fruit" className='fruit-image' />
            <h4>Passion Fruits</h4>
          </div>
        </div>
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
        <Link to="/">Back to home</Link>
      </div>
    </div>
  )
}

export default FruitsPage