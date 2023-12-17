import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Certifications/>
        <Projects/>
        <Contact/>
        <Footer/>

    </div>
  );
}

export default App;
