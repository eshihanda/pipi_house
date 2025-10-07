import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/FruitsPage.css'
import pineapple from '../assets/pineapple(2).jpeg';
import avocados from '../assets/avocados(2).jpeg';
import mangoes from '../assets/mangoes(3).jpeg';
import bananas from '../assets/banana.webp';
import passion from '../assets/passion-fruit.webp';

const FRUITS_DATA = [
  {
    id: 'pineapple',
    name: 'Pineapples',
    image: pineapple,
    description: 'A Grade Queen variety, fresh for export.',
  },
  {
    id: 'mangoes',
    name: 'Mangoes',
    image: mangoes,
    description: 'Sweet and juicy Alphonso and Kent varieties.',
  },
  {
    id: 'avocados',
    name: 'Avocados',
    image: avocados,
    description: 'Hass and Fuerte varieties, ideal for long transit.',
  },
  {
    id: 'bananas',
    name: 'Bananas',
    image: bananas,
    description: 'Cavendish and Red varieties, excellent quality.',
  },
  {
    id: 'passion-fruits',
    name: 'Passion Fruits',
    image: passion,
    description: 'Purple and yellow varieties, strong flavour.',
  },
  
];
const CARD_PER_LOAD = 6;

const FruitsPage = () => {

  const [visibleCount, setVisibleCount] = useState(CARD_PER_LOAD);
  const visibleFruits = FRUITS_DATA.slice(0, visibleCount);

  const hasMore = visibleCount < FRUITS_DATA.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + CARD_PER_LOAD);
  };

  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Fresh Tropical Fruits</h2>
      </div>
      
      <div className='container'>
        {visibleFruits.map((fruit) => (  // Changed from FRUITS_DATA to visibleFruits
          <div className='fruit-item' key={fruit.id}>
            <div className='fruit-content'>
              <img 
                src={fruit.image} 
                alt={fruit.name} 
                className='fruit-image' 
              />
              <h4>{fruit.name}</h4>
              <p className="product-detail">{fruit.description}</p> 
            </div>
          </div>
        ))}
      </div>
      
      <div className='back-link'>
        {hasMore ? (
          <button 
            onClick={handleLoadMore}
            className="product-load-button"
          >
            See More
          </button>
        ) : (
          <Link 
            to="/"
            className="product-load-button"
          >
            Back to Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default FruitsPage;