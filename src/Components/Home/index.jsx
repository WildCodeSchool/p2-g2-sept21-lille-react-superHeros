import React from 'react';
import HomeBlog from '../HomeBlog';
import HomeCarousel from '../Carousel';
import './index.css';
import wildHeroes from '../Images/TopWildHeroes.png';

function Home() {
  return (
    <div className="home">
      <img className="logo" src={wildHeroes} alt="wildHeroes" />
      <HomeBlog />
      <HomeCarousel />
    </div>
  );
}

export default Home;
