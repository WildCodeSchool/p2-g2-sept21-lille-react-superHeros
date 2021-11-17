import React from 'react';
import WildLogo from '../WildLogo';
import GameCard from '../GameCard';
import './index.css';

const heroId = [
  17, 18, 70, 106, 107, 149, 160, 162, 165, 176, 213, 226, 227, 228, 238, 242,
  247, 253, 278, 287, 303, 308, 309, 310, 322, 333, 346, 353, 354, 370, 389,
  414, 418, 479, 485, 488, 536, 538, 541, 566, 574, 579, 589, 627, 655, 686,
  696, 705, 717, 729,
];

function Collection() {
  return (
    <div>
      <WildLogo />
      <ul className="collecDisplay">
        {heroId.map((data) => {
          return (
            <li className="cardDisplay">
              <GameCard heroApi={data} key={data} cardSize="L" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Collection;
