import logo from './logo.svg';
import './App.css';
import HeroImage from './components/HeroImage';
import Bio from './components/Bio';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';


export default function App() {
  return (
    <main className='wrapper'>
      <HeroImage />
      <Bio />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}

