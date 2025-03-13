import { useState } from 'react';
import './App.css';
import NavigationBar from './components/shared/navigation/NavigationBar';
import FooterNavigation from './components/shared/navigation/FooterNavigation';

function Projects() {
  const [] = useState(0);
  return (
    <>
      <NavigationBar />
      <main>
        <div className='container'>
          <h1>Projects</h1>
        </div>
      </main>
      <FooterNavigation />
    </>
  )
};

export default Projects;