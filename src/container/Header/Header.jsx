import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <h1 className='app__header-h1'>Discover the beauty of the BioJewerly Collection</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Explore different categories. Find the best deals.
      </p>
      <button type='button' className='custom__button'>
        Shop Now
      </button>
    </div>
  </div>
);

export default Header;
