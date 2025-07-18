import React, { useEffect, useState } from 'react';
import './project.css';

function Project() {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchProjects(false);
  }, []);

  const fetchProjects = (all) => {
    fetch(`http://localhost:1020/api/project/displayproject?all=${all}`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  };

  const handleToggle = () => {
    const nextState = !showAll;
    setShowAll(nextState);
    fetchProjects(nextState);
  };

  return (
    <div className='project-container' id='project'>
      <h1>Our Latest Projects</h1>

      <div data-aos="fade-up" className="project-wrapper">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="container">
              <img
                src={`http://localhost:1011/uploads/${project.image}`}
                alt={project.name}
                className="project-image"
              />
              <div className="overlay">
                <p>{project.name}</p>
                <p>{project.description}</p>
                <button>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    See the project
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-btn">
        <button onClick={handleToggle}>
          {showAll ? 'Show Less' : 'More Projects'}
        </button>
      </div>
    </div>
  );
}

export default Project;
