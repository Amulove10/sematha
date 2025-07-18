import React, { useState } from 'react';
import './team.css';

import chapi from '../../assets/chapi.jpg';
import devOps from '../../assets/devOps.jpg';
import dibora from '../../assets/dibora.jpg';
import drtheshome from '../../assets/dr.teshome.jpg';
import legal from '../../assets/legal.jpg';
import nigus from '../../assets/nigus.jpg';
import oljira from '../../assets/oljira.jpg';
import rediet from '../../assets/rediet.png';
import samson from '../../assets/samson.jpg';
import system from '../../assets/system_engineer.jpg';
import tsega2 from '../../assets/tsega2.jpg';
import wase from '../../assets/wase.jpg';

const teamData = [
  {
    name: "Dr Teshome Bacha",
    title: "Chief Executive Officer",
    image: drtheshome,
    bio: "Dr Teshome is ...",
    category: "core"
  },

  { name: "Samson",
     title: "Team Lead",
     image: samson,
     bio: "Samson analyzes data...",
    category: "core",
    linkedin:'https://www.linkedin.com/in/samson-meseret-8b10571b5/'
  },

  { name: "Chapi",
     title: "Marketing Specialist", 
    image: chapi, 
    bio: "Chapi is our Chief Technology Officer...",
     category: "expert" ,
    linkedin:'https://www.linkedin.com/in/mintesinot-dereas-1a2960226'},

  { name: "Dawit Mekonine",
     title: "DevOps Engineer",
     image: devOps,
     bio: "Dawit Mekonine is responsible for our cloud infrastructure.", 
    category: "expert" ,
  linkedin:'https://www.linkedin.com/in/dawit-mekonnen-384013148/'},

  { name: "Dibora",
     title: "Cloud Engineer",
     image: dibora, 
    bio: "Dibora leads our design team...",
     category: "expert",
    linkedin:'https://www.linkedin.com/in/dibora-gizaw-7170ab287' },

  { name: "Hilina Abreham",
     title: "Legal Advisor",
     image: legal,
     bio: "Hilina is our legal advisor...",
     category: "advisor",
    linkedin:'https://www.linkedin.com/in/hilina-abreham/' },

  { name: "Nigus Mahari ", 
    title: " Network Engineer", 
    image: nigus,
     bio: "Nigus handles our marketing efforts...",
     category: "expert" ,
    linkedin:'https://www.linkedin.com/in/niguss-mehari'},

  { name: "Oljira",
     title: "Financial Advisor",
     image: oljira, 
    bio: "Oljira is the financial advisor...", 
    category: "advisor" ,
  linkedin:'https://www.linkedin.com/in/oljirra-rikita-2aa92a120'},

  { name: "Rediet Terefe",
     title: "Lead Developer",
     image: rediet,
     bio: "Rediet Terefe is the lead developer...",
     category: "expert" ,
    linkedin:'https://www.linkedin.com/in/rediat-terefe-b082b31b4'},

  { name: "Genet Zerihu ",
     title: "System Engineer",
     image: system,
     bio: "Genet Zerihu is responsible for system architecture...",
     category: "expert" ,
    linkedin:'https://www.linkedin.com/in/genet-zerihun-b2754518b/'},

  { name: "Tsegamariam Eshetu",
     title: "Data Analyst",
     image: tsega2,
     bio: "Tsegamariam Eshetu is a data analyst...",
     category: "expert" ,
    linkedin:'https://www.linkedin.com/in/tsegamariam-eshetu-52534a239/'},

  { name: "Washihun Teshager",
     title: "Social Media Manager",
     image: wase,
     bio: "Washihun Teshager is the social media manager...", 
    category: "expert" ,
  linkedin:'https://www.linkedin.com/in/wasihun-teshager-377a58188'},
];

const groups = [
  { title: "Core Team", filter: "core" },
  { title: "Advisors", filter: "advisor" },
  { title: "Experts", filter: "expert" },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="team-section">
      {groups.map(({ title, filter }) => {
        const members = teamData.filter(member => member.category === filter);
        return (
          <div key={filter} className="team-group">
            <h2>{title}</h2>
            <div className="team-grid">
              {members.map((member, idx) => (
                <div key={idx} className="team-member">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                  <a href={member.linkedin}>
            <i className="fab fa-linkedin" style={{ color: "dodgerblue", fontSize: "2rem" }}></i>
            </a> <br />
                  <button className='detail-btn' onClick={() => setSelectedMember(member)}>Read More</button>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <aside className={`sidebar ${selectedMember ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSelectedMember(null)}>×</button>
        {selectedMember && (
          <div className="sidebar-content">
            <img src={selectedMember.image} alt={selectedMember.name} />
            <h3>{selectedMember.name}</h3>
            <p className="sidebar-title">{selectedMember.title}</p>
            <p className="sidebar-bio">{selectedMember.bio}</p>
            <a href={selectedMember.linkedin}><i className="fab fa-linkedin" style={{ color: "dodgerblue", fontSize: "2rem" }}></i></a>
          </div>
        )}
      </aside>
    </section>
  );
}
