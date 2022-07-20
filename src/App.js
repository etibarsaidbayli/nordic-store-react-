
import './App.css';
import Carousel from './components/Carousel';
import FirstSection from './components/FirstSection';
import Nav from './components/Nav'
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Carousel/>
      <FirstSection/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
