import React from 'react';
import equi_img from '../images/image-equilibrium.jpg';
import eth from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg';
import avatar from '../images/image-avatar.png';
import view from '../images/icon-view.svg';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card-contents'>
        <div className='main_img_container'>
          <img src={equi_img} alt='image-equilibrium.jpg' className='equi_img' />
          <div className='view_icon_container'>
            <img src={view} alt='icon-view.svg' className='view_icon' />
          </div>
        </div>

        <div className='nft-info'>
          <h3 className='nft-title'>Equilibrium #3429</h3>
          <p className='nft-bio'>Our Equilibrium collection promotes balance and calm</p>

          <div className='nft-details'>
            <div className='details nft-price'>
              <img src={eth} alt='icon-ethereum.svg' />
              <p>0.041 ETH</p>
            </div>
            <div className='details nft-time-left'>
              <img src={clock} alt='icon-clock.svg' />
              <p>3 days left</p>
            </div>
          </div>
          <div className='card-footer'>
            <img src={avatar} alt='image-avatar.png' />
            <p>
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
