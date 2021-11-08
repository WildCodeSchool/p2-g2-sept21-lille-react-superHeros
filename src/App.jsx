import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Game from './Components/Game';
import Collection from './Components/Collection';
import Rules from './Components/Rules';
import News from './Components/News';
import NavBar from './Components/Navbar';
import './reset.css';
import './App.css';
import Footer from './Components/Footer/Index';


function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/newgame" component={Game} />
        <Route path="/collection" component={Collection} />
        <Route path="/rules" component={Rules} />
        <Route path="/news" component={News} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
