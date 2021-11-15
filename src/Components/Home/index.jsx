import React from 'react';
import './index.css';
import wildHeroes from '../../Images/wildHeroes.png';
import HomeBlog from '../HomeBlog';

function Home() {
  return (
    <div className="home">
      <img className="logo" src={wildHeroes} alt="wildHeroes" />
      <HomeBlog />
    </div>
  );
}

export default Home;
