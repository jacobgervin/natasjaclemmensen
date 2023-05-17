import Navbar from './components/Navbar';
import Welcome from '../src/pages/Welcome';
import Projects from '../src/pages/Projects';
import About from './pages/about';
import Contact from './pages/contact';
import React from 'react';
import './App.css';


function App() {
  const predefinedColors = ["#EBC5C5", "#BCDDF3", "#EBE4C5", "#EAC5EB"];
  const themeColor = React.useMemo(() => {
    // Choose a random index from the predefinedColors array
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  }, []);
  return (
    <div className='bg-[#FEFDFF]'>
    <Navbar themeColor={themeColor}  />
    <Welcome themeColor={themeColor} />
    <Projects themeColor={themeColor} />
    <About themeColor={themeColor} />
    <Contact themeColor={themeColor} />
    </div>
  );
}

export default App;
