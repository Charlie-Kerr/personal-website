import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const [] = useState(0)
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  }
  useEffect(() => {
    themeLoader();
  }, []);
  return (
    <>
    <div className='navigation-bar'>
        <button onClick={() => handleClick('')}>Home</button>
        <button onClick={() => handleClick('/about')}>About</button>
        <button onClick={() => handleClick('/Projects')}>Projects</button>
        <button onClick={() => handleClick('/Contact')}>Contact</button>
        {/* consider having drop down contact menu */}
    </div>
    <main>
      <div className='container'>
        <h1>Welcome</h1>
        <a target="_blank">
          <img src={reactLogo} className='logo react' alt="react logo" />
        </a>
        <div></div>
        <button onClick={() => toggleTheme()}>theme</button>
      </div>
    </main>
    </>
  )
}

function toggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
      targetTheme = "dark";
  }
  document.documentElement.setAttribute('data-theme', targetTheme)
}

function themeLoader() {
  document.documentElement.setAttribute('data-theme', "light");
}

export default App;
