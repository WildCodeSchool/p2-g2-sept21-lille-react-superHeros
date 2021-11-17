import { Carousel } from '3d-react-carousal';
import './index.css';

const SlideCarousel = () => {
  const slides = [
    <img
      className="carouselImg"
      src="https://www.superherodb.com/pictures2/portraits/10/100/659.jpg"
      alt="1"
    />,
    <img
      className="carouselImg"
      src="https://www.superherodb.com/pictures2/portraits/10/100/248.jpg"
      alt="2"
    />,
    <img
      className="carouselImg"
      src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
      alt="3"
    />,
    <img
      className="carouselImg"
      src="https://www.superherodb.com/pictures2/portraits/10/100/247.jpg"
      alt="4"
    />,
    <img
      className="carouselImg"
      src="https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
      alt="5"
    />,
  ];
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
};

export default SlideCarousel;
