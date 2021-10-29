import './components/slider/Slider.css';
import ImageSlider from './components/slider/ImageSlider';
import SliderData from './components/slider/SliderData';

function App() {
  return <ImageSlider slides={SliderData} />;
}
export default App;
