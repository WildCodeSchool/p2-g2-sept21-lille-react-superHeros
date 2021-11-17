import React from 'react';
import HomeBlog from '../HomeBlog';
import HomeCarousel from '../Carousel';
import './index.css';

function Home() {
  return (
    <div className="home">
      <HomeBlog />
      <HomeCarousel />
    </div>
  );
}

export default Home;
