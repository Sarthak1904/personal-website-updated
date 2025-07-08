import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewMinerPage.css';

const challenges = [
  {
    id: 1,
    title: 'Taming the Flood of Customer Feedback',
    challenge: 'Our first obstacle was ingesting massive, messy datasets from sources like Amazon and Yelp. The data was inconsistent, riddled with spam, and too large for simple scripts to handle.',
    solution: 'We built a scalable ingestion pipeline using Python and Dask to process huge CSV/JSON files efficiently. We developed a custom filtering engine to clean the data, remove spam, and isolate high-signal content like verified purchases and detailed low-star ratings, ensuring our analysis was focused on what mattered most.',
  },
  {
    id: 2,
    title: 'Moving Beyond Keywords to True Comprehension',
    challenge: 'Basic NLP can extract keywords, but it fails to understand context. We needed a system that could grasp sarcasm, mixed sentiment, and complex sentence structures to achieve true understanding.',
    solution: 'We integrated Hugging Face Transformers (DistilBERT & RoBERTa) into our NLP pipeline. These models replaced older, rule-based methods and provided a far more accurate, fine-grained sentiment classification. This allowed us to correctly interpret reviews where a customer might praise one feature while criticizing another in the same sentence.',
  },
  {
    id: 3,
    title: 'Discovering What Customers Really Talk About',
    challenge: 'We needed to automatically discover and categorize the key themes hidden in the text without creating manual lists of features. What were the emerging, unknown issues and highlights for each product?',
    solution: 'We used BERTopic, a state-of-the-art technique that combines transformer embeddings with clustering algorithms. This allowed us to move beyond simple keyword clouds to generate rich, context-aware topics like “battery swelling issues,” “inconsistent clothing fit,” or “delivery delays,” providing a clear, automated map of customer concerns.',
  },
  {
    id: 4,
    title: 'Turning Millions of Data Points into a Coherent Story',
    challenge: 'Even with accurate topics and sentiment, presenting raw data to a product manager is ineffective. We needed to summarize the findings into digestible, executive-level narratives.',
    solution: 'We integrated large language models, including OpenAI\'s GPT-3.5-turbo and Claude, to perform thematic summarization at scale. Using prompt chaining, the system could generate product-level executive summaries, explain complex issues in plain English (e.g., “Users complain the charger is incompatible with international outlets”), and even suggest persona-specific insights.',
  },
  {
    id: 5,
    title: 'Building an Automated, Production-Ready Backend',
    challenge: 'For these insights to be valuable, they had to be fresh. This required a robust backend architecture that could automate the entire pipeline, from data ingestion to model retraining and insight delivery.',
    solution: 'A FastAPI backend was developed to serve all processed data via REST APIs. We stored structured output in PostgreSQL and indexed vector embeddings with FAISS for powerful semantic search. The entire workflow was automated using Airflow DAGs for scheduled batch processing, ensuring our insights were always up-to-date.',
  },
];

const ReviewMinerPage = () => {
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
          From Chatter to Clarity: How We Taught a Machine to Understand the Voice of the Customer - An NLP & LLM Deep Dive
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
            In the world of e-commerce, customer reviews are a goldmine of information. Yet for most businesses, this goldmine is inaccessible, buried under a mountain of unstructured text, star ratings, and spam. How do you find the critical signal in the noise? How can you learn about a critical flaw in your product when that feedback is scattered across thousands of reviews? We set out to solve this problem by building ReviewMiner, an intelligent engine that doesn't just count stars, but reads, understands, and summarizes customer feedback at scale.
            </p>
            <p>
            This project was about creating a system that could move beyond simple sentiment and uncover the why behind customer opinions. We aimed to build an end-to-end pipeline that could process millions of reviews, identify specific topics of discussion, analyze the nuanced sentiment for each, and deliver concise, actionable insights to drive better product decisions. Here’s a look at the complex NLP challenges we solved and the powerful analytical engine we engineered.
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
            Our goal was to unlock the strategic value hidden within customer feedback, which presented two fundamental challenges:
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
            The ReviewMiner engine proved to be exceptionally effective, transforming raw customer feedback into a strategic asset. Its most significant achievement was its ability to surface critical product weaknesses—like “battery swelling” in electronics—months before they appeared in official complaints or warranty claims. This allowed for proactive, data-driven prioritization of feature fixes and support strategies.
            </p>
            <p>
            The key takeaway is that by combining modern NLP, advanced topic modeling, and LLM-powered summarization, we successfully built a system that acts as the "voice of the customer" at a massive scale. It moves a business from a reactive to a proactive stance, proving that deep textual analysis is no longer a luxury but a critical tool for product intelligence and competitive advantage in the e-commerce landscape.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewMinerPage; 