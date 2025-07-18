import React, { useEffect, useState } from 'react';
import hero from '../../assets/hero1.jpg';
import './hero.css';

const heroTexts = [
  {
    title: 'Building Dreams in Every Line of Code',
    desc: 'We can Bring your idea to Life.'
  },
  {
    title: 'Infinit Solutions, One Source Code.',
    desc: 'We Build, Deliver and Maintain software'
  },
  {
    title: 'Software Solution for All Needs.',
    desc: 'We Crate Digital Brand Platforms'
  },
  {
   title: 'Bridging Code and Tech Excellence',
desc: 'Advanced Tech Consulting and Solutions.'
  }
];

const HeroScroller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home'>
      
      <div className="hero-text-wrapper">
        <div key={currentIndex} className="hero-text animate-slide-up">
          <h1 className="hero-title">{heroTexts[currentIndex].title}</h1>
          <p className="hero-desc">{heroTexts[currentIndex].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroScroller;
