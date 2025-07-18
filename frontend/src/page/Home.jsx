import React, { useEffect } from 'react';
import HeroScroller from '../component/hero/Hero';
import Nav from '../component/navbar/Nav';
import About from '../component/about/About';
import Services from '../component/service/Service';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Project from '../component/project/Project';
import Calltoaction from '../component/calltoaction/Calltoaction';
import Team from '../component/teamn/Team';
import Partners from '../component/partners/Partners';
import Contact from '../component/contact/Contact';
import Footer from '../component/footer/Footer';
import Blog from '../component/blog/Blog';
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
      offset:50
    })
  })
  return (
    <div>
       <Nav/>
      <HeroScroller />
      <Partners/>
      <About />
      <Services />
      <Project />
      <Blog/>
      <Calltoaction/>
      <Team/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default Home;
