import React from 'react';
import './About.css';
import aboutImg from '../../assets/hero3.jpg'; 


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <div   data-aos="fade-right" className="image-wrapper">
            <img src={aboutImg} alt="About Sematha" className="about-img" />
            <div className="experience-badge">6+ Years Experience</div>
          </div>
        </div>

        <div   data-aos="fade-left" className="about-right">
          <div className="top-title">About Company</div>
          <h2 className="about-title">About Our Best Software Company</h2>
          <p className="about-text">
            <strong>SEMATHA TECHNOLOGIES</strong> is a trusted software development partner, pioneering innovation in digital solutions.
            With a strong emphasis on innovation and quality, our experienced team crafts software applications
            that optimize business processes and elevate user experiences. <br /><br />
            The company has successfully developed and deployed more than <strong>9+ impactful industrial systems</strong> to date.
          </p>
          <div data-aos="fade-up" className="consulting-callout">
            <h4>Your Partner in Strategic Evolution</h4>
            <p>With a strong and matured background, we can solve your biggest digital challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
