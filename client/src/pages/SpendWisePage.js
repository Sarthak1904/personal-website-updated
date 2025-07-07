import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpendWisePage.css';

const challenges = [
  {
    id: 1,
    title: 'The Manual Data Bottleneck',
    challenge: 'The most significant pain point in any expense system is manual data entry. It\'s slow, prone to human error, and doesn\'t scale. Our first task was to eliminate this step entirely.',
    solution: 'We enabled secure, direct file uploads to Amazon S3. By creating a simple and secure upload gateway, users could submit digital receipts and invoices instantly. This single feature immediately removed the manual entry barrier and formed the entry point for our entire automated workflow.',
  },
  {
    id: 2,
    title: 'Decoding Unstructured Receipts',
    challenge: 'Once a file was uploaded, we faced the core AI challenge: making sense of it. A simple scan isn\'t enough; the system needed to read and comprehend the document to extract meaningful data.',
    solution: 'We engineered an LLM-powered module (leveraging a fine-tuned NLP model) for automated processing. Triggered by each S3 upload, this module reads the unstructured text and images to accurately extract critical data points—vendor, amount, date, and individual line items—and then intelligently assigns a spending category based on the context.',
  },
  {
    id: 3,
    title: 'Building a Responsive and Scalable Backend',
    challenge: 'With the "what" and "how" of data extraction solved, we needed an infrastructure that could execute these tasks instantly and reliably for every single upload, whether it was one receipt or one thousand.',
    solution: 'We utilized AWS Lambda for event-driven backend processing and DynamoDB for data management. When a file hits S3, a Lambda function automatically triggers our AI module. The extracted data is then instantly written to DynamoDB, a highly scalable database that grows with our data needs without any manual provisioning. This created a fully decoupled and auto-scaling pipeline.',
  },
  {
    id: 4,
    title: 'Ensuring System Resilience and Cost-Efficiency',
    challenge: "A system that is powerful but expensive or unreliable is a failed system. We needed to ensure zero-downtime operations and prove a clear financial advantage over traditional server-based solutions.",
    solution: "The entire infrastructure was implemented and managed using the Serverless Framework. This allowed us to achieve zero-downtime deployments for continuous updates and guaranteed high availability. This serverless architecture, where we only pay for the computation we actually use, was the key driver in decreasing operational costs by 40%."
  },
  //  //   id: 5,
  //   title: 'Generative Validation',
  //   challenge: "Our initial dataset was a wild mix of image sizes and colors. A machine learning model thrives on consistency.",
  //   solution: "Standardized all images in our '360 Rocks' dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.",
  // },
];

const SpendWisePage = () => {
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
            <span>📅 2024</span>
            <span>🏷️ Machine Learning</span>
          </div>
          <h1 className="project-title">
            From Clutter to Clarity: How We Taught an AI to Understand Spending - The Architectural & Financial Deep Dive
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
              Ever been buried under a mountain of receipts and invoices at the end of the month? For businesses, this paper chaos isn't just an annoyance; it's a major drain on time and resources, leading to inaccurate reports and missed financial insights. We decided to tackle this chaos head-on by asking a critical question: could we build a system that not only stores expense data but truly understands it?
            </p>
            <p>
              This project was about creating an intelligent, automated, and highly efficient expense management platform. We aimed to build a system that could read, interpret, and categorize any expense document thrown at it, creating a seamless flow from a crumpled receipt to a perfectly categorized entry in a database. Here's a look at the technical challenges we solved, the architectural path we chose, and the significant financial and operational results we achieved.
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
              Our primary goal was to automate expense management, but this presented two fundamental challenges:
            </p>
            <p>
              The first was the sheer volume of data. With thousands of receipts and invoices coming in every month, we needed a system that could handle this influx without slowing down.
            </p>
            <ul>
              <li>
                <b>The Data Intelligence Problem:</b> How can we automatically and accurately extract structured information (vendor, amount, date, line items) from unstructured and varied sources like digital receipts and invoices, and then intelligently assign the correct spending category without human intervention?
              </li>
              <li>
                <b>The Infrastructure & Cost Problem:</b> How do we build a backend system that is powerful enough to handle a high volume of data processing, yet lean enough to be extremely cost-effective? We needed a solution that could scale instantly for thousands of uploads without the high cost and maintenance of traditional servers.
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

        <h2 className="section-title">Our Journey: Architecting Intelligence</h2>

        {challenges.map(item => (
          <div key={item.id} className="challenge-container">
            <div className="project-description">
              <div className="description-title">
                <strong>{`Challenge ${item.id}: ${item.title}`}</strong>
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
            The project was a resounding success, validating our serverless, AI-first approach. We successfully developed and deployed an expense intelligence platform capable of processing over 1,000+ expense entries with high accuracy. The most critical takeaway is the tangible financial impact: the platform's architecture directly resulted in a 40% reduction in operational costs compared to a traditional hosting model.
            </p>
            <p>
            More importantly, this project proves the power of combining event-driven architecture with advanced AI. The system doesn't just store data; it enriches it, transforming unstructured clutter into a valuable, perfectly categorized dataset. This provides a robust and intelligent foundation for all future financial reporting and analysis, demonstrating that modern cloud infrastructure and AI can solve longstanding business challenges with remarkable efficiency.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpendWisePage;