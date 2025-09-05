import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectData = [
  
  {
    title: 'SpendWise',
    description: 'Developed SpendWise, a fully serverless web application that expertly tracks over 1,000 expense entries. Leveraging AWS Lambda for backend logic and DynamoDB for scalable data, I reduced operational costs by 40% while enabling secure receipt uploads to S3. I ensured zero-downtime deployments and high availability using the Serverless Framework.',
    technologies: ['AWS Lambda', 'Amazon DynamoDB', 'Amazon S3', 'IaC','RESTful APIs','LLM','NLP','Docker','CI/CD','Serverless Framework'],
    link: '/projects/spendwise',
    color: '#FADA7A',
  },
  {
    title: 'Joblyst',
    description: `I engineered a comprehensive job seeker platform, JobJourney, pivoting from a basic browser extension to a full-scale web application after extensive user research.
By shifting to a full-stack approach with a React frontend and a Node.js backend, I provided a centralized hub for managing the entire job search lifecycle. The platform dynamically tracks application statuses on a Kanban board, schedules interviews in a calendar view, and seamlessly syncs with the browser extension for one-click job saving. I ensured an intuitive user experience through a mobile-first, responsive UI/UX design, and a robust RESTful API that enables real-time data synchronization between the extension and the web app.`,
    technologies: ['React','Node.js','RESTful APIs','PostgreSQL','Docker','CI/CD','GitHub Actions','MongoDB','Figma'],
    link: '/projects/logstream360',
    color: '#FFB26F',
  },
  {
    title: 'Floop',
    description: `I co developed Floop, a centralized feedback management system that streamlines the process of collecting, organizing, and analyzing feedback on creative projects. By integrating a direct annotation tool, a guided feedback system, and an AI-powered dashboard, I created a seamless workflow that eliminates the need for manual data entry and provides a clear, actionable overview of all feedback.`,
    technologies: ["React","Node.js","RESTful APIs","PostgreSQL","Docker","CI/CD","GitHub Actions","MongoDB","Figma"],
    link: '/projects/reviewminer',
    color: '#9BB67C',
  },
  {
    title: 'Tweet-to-Trade',
    description: `I conceived and built Tweet-to-Trade, a real-time engine to gauge how public sentiment affects stock prices. I pulled in tweets (Twitter API), financial news (News API), and stock data (Yahoo Finance, yfinance). After applying TextBlob and VADER for sentiment scoring, I ran regression analysis to see how sentiment correlated with stock trends, visualizing market movements and even prototyping an ML model to predict short-term stock prices.`,
    technologies: ['FinBERT','OpenAI GPT-3.5-turbo','VADER','Kafka','Time-series Analysis','Redis','Volume Anomaly Detection ','Docker','CI/CD','GitHub Actions'],
    link: '/projects/tweet-to-trade',
    color: '#B0DEFF',
  },
  {
    title: 'Early Stage Loan Date Prediction ',
    description: `I developed a machine learning system to predict loan payment dates, helping financial institutions optimize cash flow forecasting and make smarter lending decisions. Through comprehensive data cleaning and comparative analysis of five regression algorithms, I achieved superior performance using Random Forest and XGBoost ensemble methods.`,
    technologies: ['XGBoost','Pandas','Label Encoding','Support Vector Machine','Decision Tree'],
    link: '/projects/smartstock',
    color: '#ECFFB1',
  }
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