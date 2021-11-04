import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './Logo/NavbarLogo.png';
import WildHeroesBurger from './Logo/WildHeroesBurger.png';
import BlackHome from './Logo/BlackHome.png';
import BlackGame from './Logo/BlackGame.png';
import BlackCollection from './Logo/BlackCollection.png';
import BlackRules from './Logo/BlackRules.png';
import BlackNews from './Logo/BlackNews.png';
import YellowBars from './Logo/YellowBars.png';
import './Index.css';

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Link to="/" className="yellowBars" onClick={showSidebar}>
        <img src={YellowBars} alt="" />
      </Link>

      <nav className={sidebar ? 'navMenuActive' : 'navBar'}>
        <Link to="/" className="menuLogo" onClick={showSidebar}>
          <img src={NavbarLogo} alt="" />
        </Link>
        <div className="burgerImg">
          <img src={WildHeroesBurger} alt="" />
        </div>
        <Link to="/" className="menuBars">
          <img src={BlackHome} alt="Home" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Home</p>
        </Link>
        <Link to="/newgame" className="menuBars">
          <img src={BlackGame} alt="Game" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Play Game</p>
        </Link>
        <Link to="/collection" className="menuBars">
          <img src={BlackCollection} alt="Collection" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Collection</p>
        </Link>
        <Link to="/rules" className="menuBars">
          <img src={BlackRules} alt="Rules" />
          <p className={sidebar ? 'textShow' : 'textHide'}>Rules</p>
        </Link>
        <Link to="/news" className="menuBars">
          <img src={BlackNews} alt="News" />
          <p className={sidebar ? 'textShow' : 'textHide'}>News</p>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
