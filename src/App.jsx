import HomeBlog from './Components/HomeBlog';
import WILDHEROES from './Images/WILDHEROES.png';
import './App.css';

function App() {
  return (
    <div>
      <img className="logo" src={WILDHEROES} alt="WildHeroes" />
      <HomeBlog />
    </div>
  );
}

export default App;
