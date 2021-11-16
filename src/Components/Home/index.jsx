import React from 'react';
import HomeCarousel from '../Carousel';
import './index.css';
import wildHeroes from '../../Images/wildHeroes.png';
import HomeBlog from '../HomeBlog';

function Home() {
  return (
    <div className="home">
      <HomeCarousel />

      <img className="logo" src={wildHeroes} alt="wildHeroes" />
      <HomeBlog />
    </div>
  );
}

export default Home;
