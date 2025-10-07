import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

const PRODUCTS_DATA = [
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
  {
    id: 'cranberry-beans',
    name: 'Cranberry Beans',
    image: cranberryBeans,
    description: 'High protein content, perfect for soups and stews.',
  },
  {
    id: 'kazuri-beans',
    name: 'Kazuri Beans',
    image: kazuriBeans,
    description: 'Premium quality beans, rich in nutrients.',
  },
  {
    id: 'black-beans',
    name: 'Black Beans',
    image: blackBeans,
    description: 'Protein-rich legumes, ideal for various dishes.',
  },
  {
    id: 'yellow-beans',
    name: 'Yellow Beans',
    image: yellowBeans,
    description: 'Mild flavor, great for salads and side dishes.',
  },
  {
    id: 'kidney-beans',
    name: 'Kidney Beans',
    image: kidneyBeans,
    description: 'Classic beans for chili and traditional meals.',
  },
  {
    id: 'navy-beans',
    name: 'Navy Beans',
    image: navyBeans,
    description: 'Small white beans, perfect for baked beans.',
  },
  {
    id: 'cashewnuts',
    name: 'Cashewnuts',
    image: cashewnuts,
    description: 'Premium quality cashews, rich and creamy.',
  },
  {
    id: 'yellow-maize',
    name: 'Yellow Maize',
    image: yellowMaize,
    description: 'High-quality maize for various applications.',
  },
  {
    id: 'groundnuts',
    name: 'Groundnuts',
    image: groundnuts,
    description: 'Fresh groundnuts, excellent for oil and snacks.',
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    image: peanuts,
    description: 'Crunchy peanuts, perfect for roasting.',
  },
];

const ITEMS_PER_LOAD = 6;

const FruitsPage = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const visibleProducts = PRODUCTS_DATA.slice(0, visibleCount);

  const hasMore = visibleCount < PRODUCTS_DATA.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_LOAD);
  };

  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Our Products</h2>
      </div>
      
      <div className='container'>
        {visibleProducts.map((product) => (
          <div className='fruit-item' key={product.id}>
            <div className='fruit-content'>
              <img 
                src={product.image} 
                alt={product.name} 
                className='fruit-image' 
              />
              <h4>{product.name}</h4>
              <p className="product-detail">{product.description}</p> 
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