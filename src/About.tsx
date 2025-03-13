import { useState } from 'react';
import './App.css';
import NavigationBar from './components/shared/navigation/NavigationBar';
import FooterNavigation from './components/shared/navigation/FooterNavigation';

function About() {
  const [] = useState(0);
  return (
    <>
      <NavigationBar />
      <main>
        <div className='container'>
          <h1>About</h1>
        </div>
      </main>
      <FooterNavigation />
    </>
  )
};

export default About;