import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TweetToTradePage.css';

const challenges = [
  {
    id: 1,
    title: 'Capturing the Market Real-Time Pulse',
    challenge: 'To predict market moves, we first needed to drink from the firehose of real-time financial and social media, a high-volume, multi-source data stream that would crash any conventional system.',
    solution: 'We built a Kafka-based message queue system to manage high-volume tweet ingestion and an asynchronous Python framework to concurrently pull data from the Twitter API, News API, and Reddit. This created a resilient and fault-tolerant pipeline capable of streaming market and social updates every minute without fail.',
  },
  {
    id: 2,
    title: 'Moving Beyond Simple "Positive/Negative" Sentiment',
    challenge: 'Financial language is filled with jargon, sarcasm, and complex context that basic NLP models like VADER completely miss. We needed a deeper level of language understanding to achieve meaningful accuracy.',
    solution: 'We integrated advanced language models, specifically FinBERT and OpenAI\'s GPT-3.5-turbo, to create a hybrid scoring system. This model combined rule-based speed with LLM contextual depth, dramatically improving sentiment classification for finance-specific language. We further enhanced accuracy with a spaCy NER module to ensure sentiment was correctly attributed to the right company ticker.',
  },
  {
    id: 3,
    title: 'Finding the True Link Between Hype and Price',
    challenge: 'With accurate sentiment scores, the next challenge was to prove a statistical link between a spike in public mood and a subsequent market reaction, filtering out random noise.',
    solution: 'We conducted rigorous time-series analysis, using Granger causality tests and cross-correlation heatmaps to identify statistically significant lead-lag relationships. We engineered custom features like rolling sentiment volatility and bullish/bearish mention density to quantify the texture of public discourse, providing rich input for our predictive models.',
  },
  {
    id: 4,
    title: 'Turning Historical Correlation into Future Prediction',
    challenge: 'Identifying past relationships is one thing; predicting the future is another. The ultimate goal was to build a model that could forecast short-term price direction with a quantifiable edge.',
    solution: 'We trained an ensemble ML model (Random Forest, XGBoost, Logistic Regression) to predict short-term stock movement. The model was fed a rich diet of features, including technical indicators (RSI, MACD), sentiment trends, and volume anomalies. This predictive engine achieved ~72% accuracy (ROC-AUC > 0.75) on high-volatility stocks, validated through robust, time-aware cross-validation methods.',
  },
  {
    id: 5,
    title: 'Building a Scalable and Production-Ready Backend',
    challenge: 'A predictive model is useless without a scalable, secure, and reliable system to serve its insights. The architecture needed to support real-time requests, periodic model retraining, and continuous operation.',
    solution: 'We developed a modular backend using FastAPI with a Celery and Redis task queue for scheduling asynchronous jobs like model retraining and data aggregation. The entire ecosystem of microservices was containerized with Docker, and a full CI/CD pipeline using GitHub Actions was set up for automated testing and deployment, ensuring production-grade reliability.',
  },
];

const TweetToTradePage = () => {
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
          From Hype to Alpha: How We Taught a Machine to Predict Markets from Social Media - An LLM & Predictive Analytics Deep Dive
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
            In today's market, a single tweet can send a stock soaring or tumbling. Public sentiment has become a powerful, yet notoriously chaotic, force in finance. But how can this firehose of opinions, memes, and news be systematically measured and used? Can you separate the genuine market-moving signals from the noise? We set out to answer this by building Tweet-to-Trade, an end-to-end system designed to listen to the digital world, understand its mood with advanced AI, and predict its impact on the stock market.
            </p>
            <p>
            This was not just an exercise in data collection. Our goal was to create a full-fledged predictive engine that could ingest massive data streams in real time, apply nuanced, LLM-powered language understanding, and ultimately generate actionable intelligence on short-term price movements. Here’s a look at the complex data and AI challenges we overcame and the predictive system we built from scratch.
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
            Our mission was to systematically trade on public sentiment, which presented two core challenges:
            </p>
            <ul>
              <li>
              <b>The Signal-from-Noise Problem:</b> How do you ingest and process a massive, high-velocity stream of noisy social media data (~50 tweets/sec), understand its complex and often sarcastic sentiment with high accuracy, and correctly correlate these fleeting signals with specific stock market movements?
              </li>
              <li>
              <b>The Predictive Intelligence Problem:</b> How do you move beyond simple correlation and build a machine learning model that can use this sentiment data to generate reliable, forward-looking predictions about stock price movements, all architected on a scalable and resilient backend infrastructure?
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
            This project successfully created an end-to-end platform that transforms chaotic public discourse into a quantifiable, predictive financial edge. The system's ability to achieve ~72% accuracy in predicting short-term price movements validates the core thesis: that LLM-enhanced sentiment, when correctly processed and analyzed, contains significant predictive power.
            </p>
            <p>
            The key takeaway is that we have built a highly scalable and extensible foundation for a new class of financial intelligence. The architecture is not just an analytical tool but a learning system, ready to be expanded with reinforcement learning trading agents, automated news summarization, and integration into emerging DeFi markets. This project proves that the fusion of real-time data engineering, advanced LLMs, and machine learning can create powerful, predictive insights in one of the world's most competitive domains.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TweetToTradePage; 