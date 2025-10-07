import React, { useState } from 'react'
import '../Styles/FruitsPage.css'
import cranberryBeans from '../assets/cranberry-beans.jpeg';
import kazuriBeans from '../assets/Kazuri-beans.jpeg';
import kidneyBeans from '../assets/kidney-beans.jpeg';
import yellowBeans from '../assets/yellow-beans.webp';
import blackBeans from '../assets/black-beans.webp';
import navyBeans from '../assets/Navy-Beans.jpg';
import { Link } from 'react-router-dom'

const LEGUMES_DATA = [
  {
    id: 'cranberry',
    name: 'Cranberry Beans',
    image: cranberryBeans,
    description: 'Rich in fiber and iron, excellent quality.',
  },
  {
    id: 'kazuri',
    name: 'Kazuri Beans',
    image: kazuriBeans,
    description: 'Locally sourced, great for hearty stews.',
  },
  {
    id: 'black',
    name: 'Black Beans',
    image: blackBeans,
    description: 'High protein content, uniform size.',
  },
  {
    id: 'yellow',
    name: 'Yellow Beans',
    image: yellowBeans,
    description: 'Versatile and quick-cooking variety.',
  },
  {
    id: 'kidney',
    name: 'Kidney Beans',
    image: kidneyBeans,
    description: 'Large, dark red seeds, perfect for canning.',
  },
  {
    id: 'navy',
    name: 'Navy Beans',
    image: navyBeans,
    description: 'Small, oval shape, ideal for baked beans.',
  },
];

const CARD_PER_LOAD = 6;

const LegumesPage = () => {

  const [visibleCount, setVisibleCount] = useState(CARD_PER_LOAD);
  const visibleLegumes = LEGUMES_DATA.slice(0, visibleCount);

  const hasMore = visibleCount < LEGUMES_DATA.length;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + CARD_PER_LOAD);
  };

  let buttonContent;
  let buttonAction;
  let buttonLink;
if (hasMore) {
  buttonContent = 'See More';
  buttonAction = handleLoadMore;
  buttonLink = null;
} else {
  buttonContent = 'Back to Home';
  buttonAction = handleLoadMore;
  buttonLink = '/';
}

const ButtonComponent = buttonLink ? Link : 'button';


  return (
    <div className='fruits-page'>
      <div className='header'>
        <h2 className='header-title'>Premium Cereals & Nuts</h2>
      </div>

      <div className='container'>
        {visibleLegumes.map((legumes) => (
          <div className='fruit-item' key={legumes.id}>
            <div className='fruit-content'>
              <img
                src={legumes.image}
                alt={legumes.name}
                className='fruit-image'
              />
              <h4>{legumes.name}</h4>
              <p className="product-detail">{legumes.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='back-link'>
        <ButtonComponent 
          to={buttonLink} 
          onClick={buttonAction}
          className="product-load-button"
        >
          {buttonContent}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default LegumesPage;