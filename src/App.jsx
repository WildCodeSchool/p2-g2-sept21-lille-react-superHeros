import HomeBlog from './Components/HomeBlog';
import WildHeroes from './Images/WildHeroes.png';
import './App.css';

function App() {
  return (
    <div>
      <img className="logo" src={WildHeroes} alt="WildHeroes" />
      <HomeBlog />
    </div>
  );
}

export default App;
