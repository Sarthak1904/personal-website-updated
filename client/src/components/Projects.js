import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectData = [
  {
    title: 'SmartStock',
    description: 'Developed and deployed SmartStock, a scalable inventory management system managing over 5,000 products and 200 suppliers. By building a RESTful API with ASP.NET Core and an Angular frontend, I boosted user interaction speed by 35%, all while ensuring robust deployments via Azure and Docker.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '/projects/smartstock',
    color: '#ECFFB1',
  },
  {
    title: 'SpendWise',
    description: 'Developed SpendWise, a fully serverless web application that expertly tracks over 1,000 expense entries. Leveraging AWS Lambda for backend logic and DynamoDB for scalable data, I reduced operational costs by 40% while enabling secure receipt uploads to S3. I ensured zero-downtime deployments and high availability using the Serverless Framework.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '/projects/spendwise',
    color: '#FADA7A',
  },
  {
    title: 'LogStream360',
    description: 'I engineered LogStream360, a real-time log analytics dashboard capable of processing over 100,000 log entries/day. By leveraging AWS Kinesis and CloudWatch, I achieved incident detection times under 5 seconds. I designed the interactive Angular frontend with a Node.js backend and PostgreSQL, deploying with Docker and automated CI/CD pipelines that boosted testing coverage to 90%.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '/projects/logstream360',
    color: '#FFB26F',
  },
  {
    title: 'ReviewMiner',
    description: 'I put together ReviewMiner, an engine that analyzes huge product review datasets (like Amazon and Yelp). Using tools like spaCy, NLTK, LDA, Hugging Face Transformers, and Gensim, I built an NLP pipeline to uncover user sentiment, popular topics, and emerging issues. I then created visual insights to give actionable advice for product development and customer satisfaction.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '/projects/reviewminer',
    color: '#9BB67C',
  },
  {
    title: 'Tweet-to-Trade',
    description: 'I conceived and built Tweet-to-Trade, a real-time engine to gauge how public sentiment affects stock prices. I pulled in tweets (Twitter API), financial news (News API), and stock data (Yahoo Finance, yfinance). After applying TextBlob and VADER for sentiment scoring, I ran regression analysis to see how sentiment correlated with stock trends, visualizing market movements and even prototyping an ML model to predict short-term stock prices.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '/projects/tweet-to-trade',
    color: '#B0DEFF',
  },
  /*{
    title: 'Spend wise',
    description: 'Cut costs, not corners. SpendWise is your serverless expense manager, leveraging AWS Lambda and DynamoDB for seamless tracking, reporting, and a 40% reduction in operational overhead.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '#',
    color: '#E0F2F2',
  },
  {
    title: 'Spend wise',
    description: 'Cut costs, not corners. SpendWise is your serverless expense manager, leveraging AWS Lambda and DynamoDB for seamless tracking, reporting, and a 40% reduction in operational overhead.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '#',
    color: '#FFF2E0',
  },
  {
    title: 'Spend wise',
    description: 'Cut costs, not corners. SpendWise is your serverless expense manager, leveraging AWS Lambda and DynamoDB for seamless tracking, reporting, and a 40% reduction in operational overhead.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'Node.js'],
    link: '#',
    color: '#D9FFD9',
  },
  */
];

const Projects = ({ onHover }) => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>SELECTED PROJECTS</h2>
        <p>I commit to creative insight with functional design to deliver solutions that are not only original but also results-driven.</p>
      </div>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="card-container"
            onMouseEnter={() => onHover(true, project.color)}
            onMouseLeave={() => onHover(false, null)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 