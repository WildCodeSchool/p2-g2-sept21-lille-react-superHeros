import GameCard from './Components/GameCard';
import './App.css';

const heroId = [
  17, 18, 70, 106, 107, 149, 160, 162, 165, 176, 213, 226, 227, 228, 238, 242,
  247, 253, 278, 287, 303, 308, 309, 310, 322, 333, 346, 353, 354, 370, 389,
  414, 418, 479, 485, 488, 536, 538, 541, 566, 574, 579, 589, 627, 655, 686,
  696, 705, 717, 729,
];

function App() {
  return (
    <div>
      {heroId.map((data) => {
        return <GameCard heroApi={data} key={data} cardSize="S" />;
      })}
    </div>
  );
}

export default App;
