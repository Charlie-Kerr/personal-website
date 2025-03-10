import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavigationBar from './components/shared/navigation/NavigationBar';

function App() {
  const [] = useState(0);
  useEffect(() => {
    themeLoader();
  }, []);
  return (
    <>
    <NavigationBar />
    <main>
      <div className='container'>
        <h1>Welcome</h1>
        <a target="_blank">
          <img src={reactLogo} className='logo react' alt="react logo" />
        </a>
        <div>
          {/* <HoverShinyEffect color="blue"/> */}
        </div>
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
  console.log('Toggle: changed theme to ' + targetTheme);
  document.documentElement.setAttribute('data-theme', targetTheme);
}

function themeLoader() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if(currentTheme === null) {
    document.documentElement.setAttribute('data-theme', 'light');
    console.log('Loader: Set theme to light');
  }
}

export default App;
