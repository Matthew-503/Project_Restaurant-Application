import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_logo'>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>
          My Account
        </h1>

        <p className='p__opensans'>
          Sign In
        </p>

        <p className='p__opensans'>
          Register
        </p>

        <p className='p__opensans'>
          Order Status
        </p>

      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>
          Help        </h1>

        <p className='p__opensans'>
          Shipping
        </p>

        <p className='p__opensans'>
          Returns
        </p>

        <p className='p__opensans'>
          Sizing
        </p>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>
          Shop
        </h1>

        <p className='p__opensans'>
          Products
        </p>

        <p className='p__opensans'>
          Gold
        </p>

        <p className='p__opensans'>
          Silver
        </p>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>
          Legal
        </h1>

        <p className='p__opensans'>
          Shipping & Delivery
        </p>

        <p className='p__opensans'>
          Terms & Condition
        </p>

        <p className='p__opensans'>
          Privacy & Policy
        </p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>
        Copyright @ 2023 BioJewlery All rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
