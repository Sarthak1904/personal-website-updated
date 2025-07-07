import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogStream360Page.css';

const challenges = [
  {
    id: 1,
    title: 'Taming the Firehose of Real-Time Data',
    challenge: 'The first hurdle was to capture and aggregate a massive, continuous stream of logs from dozens of sources without losing a single entry. The system had to be capable of immediate analysis and alerting.',
    solution: 'We architected a real-time data streaming pipeline using AWS Kinesis Data Streams for high-throughput ingestion. This was combined with CloudWatch Logs for aggregation and CloudWatch Alarms for threshold-based alerting. This powerful setup enabled us to achieve incident detection and alerting in under 5 seconds, dramatically reducing response times.',
  },
  {
    id: 2,
    title: 'Building a Powerful and Queryable Backend',
    challenge: 'Once the data was captured, we needed a robust backend that could store it efficiently and allow for complex, high-speed queries. Standard database designs would not suffice for time-series log data.',
    solution: 'We implemented a scalable Node.js service with a PostgreSQL database. The database schema was meticulously optimized for time-series data, enabling dynamic filtering, aggregations, and fast, indexed searches. To ensure security, we integrated role-based API endpoints for controlled data access.',
  },
  {
    id: 3,
    title: 'Translating Raw Data into Human Insight',
    challenge: 'Numbers and logs are meaningless without interpretation. We needed an intuitive interface where engineers could easily visualize trends, spot anomalies, and diagnose issues without writing a single database query.',
    solution: 'A responsive dashboard was developed using Angular, featuring interactive visualizations built with Chart.js and D3.js. Time-series plots, pie charts, and stacked bar charts gave users a clear view of error types, frequency trends, and service-specific anomalies, turning raw data into actionable insights.',
  },
  {
    id: 4,
    title: 'Automating for Scale and Reliability',
    challenge: 'A complex, multi-component application like this is impossible to manage manually. We needed to ensure that we could deploy, scale, and update the entire platform reliably and repeatedly with minimal human intervention.',
    solution: 'We containerized the entire application stack using Docker and provisioned the cloud infrastructure as code with Terraform. A full CI/CD pipeline was configured using GitHub Actions to automate all testing, building, and deployment processes across staging and production environments, ensuring consistency and eliminating manual deployment errors.',
  },
  {
    id: 5,
    title: 'Ensuring Quality and Long-Term Maintainability',
    challenge: 'A system is only as good as its quality and documentation. We prioritized building a resilient and well-documented platform that other engineers could easily understand, contribute to, and trust.',
    solution: 'We enforced a rigorous testing culture, achieving over 90% code coverage with unit and integration tests using Jest and Supertest. We also integrated Prometheus metrics for deeper infrastructure monitoring via Grafana and created comprehensive Markdown documentation for architecture, onboarding, and incident response protocols.',
  },
];

const LogStream360Page = () => {
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    const cursor = document.querySelector('.custom-cursor-bubble');
    if (cursor) {
      cursor.classList.add('image-hover');
      cursor.innerHTML = 'Image';
    }
  };

  const handleMouseLeave = () => {
    const cursor = document.querySelector('.custom-cursor-bubble');
    if (cursor) {
      cursor.classList.remove('image-hover');
      cursor.innerHTML = 'You';
    }
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-button">
        &#8249; Back
      </button>
      <div className="tweet-to-trade-container">
        <div className="project-header">
          <div className="project-meta">
            <span>📅 2023</span>
            <span>🏷️ Machine Learning</span>
          </div>
          <h1 className="project-title">
            From Noise to Signals: How We Built a System to See and Understand Data in Real-Time - A Full-Stack & DevOps Deep Dive
          </h1>
        </div>
        <img 
          src="https://placehold.co/900x500/EFEFEF/333333?text=Project+Image" 
          alt="Project" 
          className="project-image" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="project-description">
          <h2 className="description-title">Project description</h2>
          <div className="description-text">
            <p>
            In any complex system, data is constantly flowing—RESTful APIs, microservices, and file streams generate a torrent of log entries every second. But this data is often just noise, an overwhelming flood that hides critical signals. How can you spot a system failure before it impacts users? How do you turn terabytes of raw text into a clear story about your application's health? We confronted this challenge directly: to build a platform that could not only handle this data deluge but transform it into actionable intelligence.
            </p>
            <p>
            This wasn't just about building a log collector; it was about creating a central nervous system for our infrastructure. We aimed to provide real-time visibility, enable lightning-fast incident detection, and empower our engineering teams with the insights needed to achieve operational excellence. Here’s how we architected the solution from the ground up, the technical problems we solved, and the quantifiable impact it had on our operations.
            </p>
          </div>
        </div>

        <img
          src="https://placehold.co/900x400/f6eeda/f6eeda.png"
          alt="Placeholder"
          className="placeholder-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div className="project-description">
          <h3 className="description-title">The Problem statement:</h3>
          <div className="description-text">
            <p>
              Our goal was to gain complete control over our operational data, but we faced two primary obstacles:
            </p>
            <p>
              Therefore, our problem was twofold:
            </p>
            <ul>
              <li>
                <b>The Visibility & Speed Problem:</b> With logs scattered across numerous services and systems, we had no centralized way to view application behavior in real-time. How could we ingest and process over 100,000 log entries per day and detect critical anomalies fast enough to prevent downtime?
              </li>
              <li>
                <b>The Scalability & Maintainability Problem:</b> How do we build a high-performance analytics platform—from the data pipeline to the frontend dashboard—that is not only scalable and secure but also easy to deploy, maintain, and test, ensuring long-term reliability and developer efficiency?
              </li>
            </ul>
          </div>
        </div>

        <img
          src="https://placehold.co/900x400/d4e4d4/d4e4d4.png"
          alt="Placeholder"
          className="placeholder-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <h2 className="section-title">Our Journey Begins: Sculpting Data for Intelligence</h2>
        
        {challenges.map(item => (
          <div key={item.id} className="challenge-container">
            <div className="project-description">
              <div className="description-title">
                <strong>Challenge {item.id}:</strong>
                <strong>{item.title}</strong>
              </div>
              <div className="description-text">
                <p>{item.challenge}</p>
              </div>
            </div>
            <div className="project-description">
              <div className="description-title">
                <strong>Solution:</strong>
              </div>
              <div className="description-text">
                <p>{item.solution}</p>
              </div>
            </div>
          </div>
        ))}

        <img
          src="https://placehold.co/900x400/fef4e0/fef4e0.png"
          alt="Placeholder"
          className="placeholder-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div className="project-description">
          <div className="description-title">
            <strong>Result and key takeaway</strong>
          </div>
          <div className="description-text">
            <p>
            This project successfully delivered a mission-critical platform capable of processing over 100,000 log entries daily and providing insights that were previously impossible to obtain. The key takeaway is the fusion of full-stack development and DevOps automation: by building a robust application and supporting it with a fully automated, infrastructure-as-code environment, we created a system that is not only powerful but also resilient, scalable, and highly maintainable.
            </p>
            <p>
            The platform transformed our operational capability, turning raw machine data into the clear, actionable signals needed for rapid incident response and proactive system improvements. It stands as a testament to how a well-architected system can directly enhance operational agility and drive a culture of reliability.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogStream360Page; 