import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function About() {
  const [] = useState(0);
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  }
  return (
    <>
      <div className='navigation-bar'>
          <button onClick={() => handleClick('/')}>Home</button>
          <button onClick={() => handleClick('/about')}>About</button>
          <button onClick={() => handleClick('/Projects')}>Projects</button>
          <button onClick={() => handleClick('/Contact')}>Contact</button>
          {/* consider having drop down contact menu */}
      </div>
    </>
  )
};

export default About;