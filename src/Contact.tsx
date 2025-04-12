import { useState } from 'react';
import './App.css';
import NavigationBar from './components/navigation/NavigationBar';
import FooterNavigation from './components/navigation/FooterNavigation';


function Contact() {
  const [] = useState(0);
  return (
    <>
      <NavigationBar />
      <main>
        <div className='container'>
          <h1>Contact</h1>
        </div>
      </main>
      <FooterNavigation/>
    </>
  )
};

export default Contact;