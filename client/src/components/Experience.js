import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: 'Indiana University',
    period: 'DEC 2024-Present',
    position: 'Software Developer',
    location: 'Indiana, United States',
    industry: 'Education',
    description: 'Built a scalable question-generation platform using React, Node.js, and MongoDB, serving 300+ students monthly. Integrated CI/CD pipelines with Jenkins and Docker to reduce deployment time by 35%, improved REST API documentation to cut developer onboarding by 20 hours, and collaborated with cross-functional teams to refine user experience.',
  },
  {
    company: 'DataToBiz',
    period: 'JAN 2023-JUL 2023',
    position: 'Full Stack Developer ',
    location: 'Mohali, India',
    industry: 'Tech Startup',
    description: 'Built a scalable question-generation platform using JavaScript, Node.js, and React, improving curriculum efficiency by 40% and serving 300+ students monthly. Implemented CI/CD pipelines to reduce deployment time by 35% and streamline integration. Integrated ML models with TensorFlow and Scikit-learn to personalize quiz recommendations and boost student engagement',
  },
  {
    company: 'Highradius',
    period: 'JAN 2022-APR 2022',
    position: 'Software Developer',
    location: 'Hyderabad, India',
    industry: 'FinTech',
    description: 'Developed an e-learning platform using C# and .NET 5 with the MVC pattern, integrating SignalR for real-time collaboration on digital whiteboards. Built a robust data system with Entity Framework, MSSQL, and LINQ for optimized retrieval. Streamlined deployments with CI/CD pipelines in Azure DevOps and enhanced team efficiency using JIRA for workflow management.',
  },
  {
    company: 'Ananta Resource Management',
    period: 'JUN 2021-DEC 2021',
    position: 'Android Developer',
    location: 'Mumbai, India',
    industry: 'Tech Startup',
    description: 'Built a hotel management platform using Flutter with MVC architecture and GetX, enabling owners to list rooms and manage bookings. Integrated GraphQL for backend services and implemented a responsive design for seamless use across devices. Actively incorporated user feedback to enhance usability and increase client satisfaction.',
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span>{exp.period}</span>
            </div>
            <div className="experience-details">
              <div className="detail-row">
                <span className="detail-label">Position</span>
                <span className="detail-value">{exp.position}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span className="detail-value">{exp.location}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Industry</span>
                <span className="detail-value">{exp.industry}</span>
              </div>
            </div>
            <div className="experience-description">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 