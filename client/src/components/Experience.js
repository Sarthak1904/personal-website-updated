import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: 'Indiana University',
    period: 'DEC 2024-Present',
    position: 'Software Developer',
    location: 'Indiana, United States',
    industry: 'Education',
    description: 'Engineered a high-throughput data pipeline using Python and Google Maps API to process over one million geospatial data points daily for large-scale financial market research. Designed a distributed computing solution with MapReduce and NoSQL, improving data processing efficiency by 40% and enabling advanced algorithmic analysis. Re-architected statistical sampling algorithms, cutting data acquisition costs by 30% while boosting coverage across key markets. Built and documented a comprehensive data framework that streamlined workflows, halved onboarding and data access time, and supported scalable organizational growth.',
  },
  {
    company: 'DataToBiz',
    period: 'JAN 2023-JUL 2023',
    position: 'Full Stack Developer ',
    location: 'Mohali, India',
    industry: 'Tech Startup',
    description: 'Led full-stack development of a MERN-based question-generation platform, scaling it to 5,000+ monthly active students with 99.9% uptime. Built a CI/CD pipeline using Jenkins and Docker, cutting deployment time from hours to under 15 minutes and improving efficiency by 35%. Introduced OpenAPI specs for REST APIs, standardizing documentation and saving 20+ hours per engineer during onboarding. Translated user feedback into key features, boosting user satisfaction by 25% and daily engagement by 15%.',
  },
  {
    company: 'Highradius',
    period: 'JAN 2022-APR 2022',
    position: 'Software Developer',
    location: 'Hyderabad, India',
    industry: 'FinTech',
    description: 'Managed 5 production applications as a Database Administrator, leading zero-downtime backend migrations from MSSQL to PostgreSQL. Re-architected schemas for 3 internal apps with improved normalization and indexing, enhancing query performance by 20% and scalability. Remediated 1,200+ SQL queries and refactored data access layers in 2 ASP.NET apps for PostgreSQL compatibility. Contributed in an Agile environment, helping boost team velocity by 15% and cut critical production bugs by 30% through code reviews and sprint planning.',
  },
  {
    company: 'Nakshatra Upscale',
    period: 'FEB 2020-NOV 2021',
    position: 'Full Stack Developer',
    location: 'Banglore, India',
    industry: 'Tech Startup',
    description: 'Designed and developed a responsive, user-friendly web interface to visualize and manage construction project data, including costs and timelines, by integrating with a Python-based RESTful API. I created reusable UI components and implemented form validation to improve data entry and ensure data integrity. Additionally, I built and maintained the company\'s public-facing website to showcase project portfolios, optimizing its performance and enhancing the overall user experience.',
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