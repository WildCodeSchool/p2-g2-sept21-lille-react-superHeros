import HomeBlog from './Components/HomeBlog';
import wildHeroes from './Images/wildHeroes.png';
import './App.css';

function App() {
  return (
    <div>
      <img className="logo" src={wildHeroes} alt="wildHeroes" />
      <HomeBlog />
    </div>
  );
}

export default App;
