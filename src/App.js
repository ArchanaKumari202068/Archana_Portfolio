

// import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className='app'>
      <Navbar />
      
      <Home />
      <About />
      <Project />
      <Skill />
    </div>
  );
}

export default App;
