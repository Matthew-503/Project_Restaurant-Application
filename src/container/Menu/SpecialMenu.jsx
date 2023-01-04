import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu That Fits Your Palette' />
      <h1 className='headtext__cormorant'>
        Today's Special
      </h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMeni-menu_heading'>
          Wine & Beer

          <div>
            {data.wines.map((wine, index) => (
              <p>{wine.title}</p>
            ))}
          </div>

        </p>
      </div>
    </div>

    <div>
      <img src={images.menu} alt='menu_img' />
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMeni-menu_heading'>
          Wine & Beer

          <div>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>

        </p>
      </div>
    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
