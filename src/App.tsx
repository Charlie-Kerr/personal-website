import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import profile from './assets/profile.jpg';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import FooterNavigation from './components/navigation/FooterNavigation';

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
        <img src={profile} className='profile'></img>
        <h1 className='margin-bottom-0'>I'm Charlie</h1>
        <h5 className='margin-top-0'>Learning how to be a great developer.</h5>
      </div>
      <div className='container'>
        <a target="_blank">
          <img src={reactLogo} className='logo react' alt="react logo" />
        </a>
        <div>
          <button onClick={() => toggleTheme()}>theme</button>
        </div>
      </div>
    </main>
    <FooterNavigation/>
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
