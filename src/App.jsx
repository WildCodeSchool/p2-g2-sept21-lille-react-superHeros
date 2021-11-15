import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';
import Game from './Components/Game';
import Collection from './Components/Collection';
import Rules from './Components/Rules';
import News from './Components/News';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="navHome">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/newgame" component={Game} />
            <Route path="/collection" component={Collection} />
            <Route path="/rules" component={Rules} />
            <Route path="/news" component={News} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
