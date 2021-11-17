import React from 'react';
import { Carousel } from '3d-react-carousal';
import { useEffect } from 'react/cjs/react.development';
import GameCard from '../GameCard';
import './index.css';

const heroId = [
  17, 18, 70, 106, 107, 149, 160, 162, 165, 176, 213, 226, 227, 228, 238, 242,
  247, 253, 278, 287, 303, 308, 309, 310, 322, 333, 346, 353, 354, 370, 389,
  414, 418, 479, 485, 488, 536, 538, 541, 566, 574, 579, 589, 627, 655, 686,
  696, 705, 717, 729,
];

const cardId = [];
for (let i = 0; i < 5; i += 1) {
  cardId[i] = heroId[Math.floor(Math.random() * heroId.length)];
}

const SlideCarousel = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const slides = cardId.map((data) => {
    return (
      <GameCard
        heroApi={data}
        key={data}
        cardSize={width < breakpoint ? 'XS' : 'XL'}
      />
    );
  });

  return (
    <div className="carouselLayout">
      <Carousel slides={slides} />
    </div>
  );
};

export default SlideCarousel;
