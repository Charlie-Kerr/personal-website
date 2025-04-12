import { useState } from 'react';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import FooterNavigation from './components/navigation/FooterNavigation';
import ProjectBox from './components/containers/ProjectBox';

function Projects() {
  const [] = useState(0);
  return (
    <>
      <NavigationBar />
      <main>
        <div className='container'>
          <h1>Projects</h1>
        </div>
        <div className='projects'>
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </main>
      <FooterNavigation />
    </>
  )
};

export default Projects;