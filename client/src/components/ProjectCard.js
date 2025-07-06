import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, link, color } = project;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to:', link);
    navigate(link);
  };

  return (
    <div className="project-card" style={{ backgroundColor: color }}>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <button onClick={handleClick} className="view-project-btn">View project</button>
      </div>
      <div className="decorative-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </div>
  );
};

export default ProjectCard;