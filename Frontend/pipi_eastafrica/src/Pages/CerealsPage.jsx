import React, { useState } from 'react'
import '../Styles/FruitsPage.css'
import cashewnuts from '../assets/cashewnuts.jpeg';
import yellowMaize from '../assets/yellow-maize.jpeg';
import groundnuts from '../assets/groundnuts.jpeg';
import peanuts from '../assets/peanuts.jpeg';
import whiteMaize from '../assets/white-maize.webp';
import kamande from '../assets/kamande.webp';
import ndengu from '../assets/ndengu.webp';
import { Link } from 'react-router-dom'

const CEREALS_DATA = [
  {
    id: 'cashewnuts',
    name: 'Cashewnuts',
    image: cashewnuts,
    description: 'High-grade, roasted or raw, customizable packaging.',
  },
  {
    id: 'yellow-maize',
    name: 'Yellow Maize',
    image: yellowMaize,
    description: 'Non-GMO, excellent feed and industrial grade.',
  },
  {
    id: 'groundnuts',
    name: 'Groundnuts',
    image: groundnuts,
    description: 'Red and runner varieties, high oil content.',
  },
  {
    id: 'kamande',
    name: 'Lentils/Kamande',
    image: kamande,
    description: 'Popular local variety, versatile use.',
  },
  {
    id: 'peanuts',
    name: 'Peanuts',
    image: peanuts,
    description: 'Virginia and Spanish types, raw or shelled.',
  },
  {
    id: 'ndengu',
    name: 'Green Gram/ Ndengu',
    image: ndengu,
    description: 'High protein content',
  },
  {
    id: 'white-maize',
    name: 'White Maize',
    image: whiteMaize,
    description: 'Certified organic cereal for food.',
  },
  {
    id: 'cashewnuts-3',
    name: 'Cashewnuts Extra',
    image: cashewnuts,
    description: 'Extra large kernel size.',
  },
  {
    id: 'yellow-maize-3',
    name: 'Yellow Maize Organic',
    image: yellowMaize,
    description: 'Certified organic.',
  },
  {
    id: 'groundnuts-3',
    name: 'Groundnuts Oil Grade',
    image: groundnuts,
    description: 'Optimized for oil extraction.',
  },
  {
    id: 'peanuts-3',
    name: 'Peanuts Blanched',
    image: peanuts,
    description: 'Blanched and ready for confectionary use.',
  },
];
const CARD_PER_LOAD = 6;

const CerealsPage = () => {

  const [visibleCount, setVisibleCount] = useState(CARD_PER_LOAD);
  const visibleCereals = CEREALS_DATA.slice(0, visibleCount);

  const hasMore = visibleCount < CEREALS_DATA.length;

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
        {visibleCereals.map((cereal) => (
          <div className='fruit-item' key={cereal.id}>
            <div className='fruit-content'>
              <img
                src={cereal.image}
                alt={cereal.name}
                className='fruit-image'
              />
              <h4>{cereal.name}</h4>
              <p className="product-detail">{cereal.description}</p>
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

export default CerealsPage;
