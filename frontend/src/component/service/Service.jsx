import React from 'react';
import './service.css';

function Services() {
  return (
    <section data-aos="fade-up" className="services-section" id="service">
    <h2 className="services-heading">Our Services</h2>
    <p className="services-subtitle">Empowering businesses through technology</p>

    <div className="services-grid">
      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-globe" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Web Applications</h3>
        <p>
At the forefront of web development, we leverage React, Angular, Python, Node.js, and Java to craft innovative, seamless, and digital solutions.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-mobile-screen-button" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Mobile Application</h3>
        <p>
          Our team excels with modern frameworks such as React Native, Flutter, and Swift, ensuring efficient solutions for an exceptional user experience.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-network-wired" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Network Installation</h3>
        <p>
          As networking experts, we specialize in deploying secure and scalable networks, empowering businesses in the digital landscape.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-gears" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>DevOps</h3>
        <p>
          At the forefront of DevOps and server management, we capitalize on Docker, Kubernetes, Terraform, Ansible, and Jenkins to develop robust, scalable, and automated solutions.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-chart-bar" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Data Analysis</h3>
        <p>
          At the pinnacle of data analytics, we harness the power of Python, R, SQL, Tableau, and Hadoop to engineer insightful, streamlined, and data-driven solutions.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-briefcase" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>IT Consulting</h3>
        <p>
          As a trusted IT consultancy, we deliver expert guidance and strategic solutions, for you to navigate and thrive in the dynamic technology landscape.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-cloud" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Cloud Service</h3>
        <p>
          Pioneering in cloud services, we harness the capabilities of AWS, Azure, Google Cloud Platform, Kubernetes, and Docker to design scalable, robust, and efficient solutions, facilitating seamless digital evolution.
        </p>
      </div>

      <div className="service-card animate-fade-in">
        <div className="service-icon">
          <i className="fa-solid fa-rocket" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
        </div>
        <h3>Branding And SEO</h3>
        <p>
          At the forefront of branding and SEO, we utilize strategic content creation, keyword optimization, and tools like Google Analytics, SEMrush, and Yoast to build impactful and visible online presences.
        </p>
      </div>
    </div>
  </section>
  );
}

export default Services;
