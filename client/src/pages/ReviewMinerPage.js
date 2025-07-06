import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewMinerPage.css';

const challenges = [
  {
    id: 1,
    title: 'Inconsistent Image Data',
    challenge: 'Our initial dataset was a wild mix of image sizes and colors. A machine learning model thrives on consistency.',
    solution: 'Standardized all images in our ‘360 Rocks’ dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.',
  },
  {
    id: 2,
    title: 'Dimensionality Reduction',
    challenge: 'With 4096 pixel features per image, our models would have drowned in noise and complexity, leading to slow training and poor generalization.',
    solution: 'Standardized all images in our ‘360 Rocks’ dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.',
  },
  {
    id: 3,
    title: 'Natural Grouping Discovery',
    challenge: 'Before building a classifier, we wanted to understand if our ‘rock’ images naturally fell into distinct categories. This insight could guide our classification strategy.',
    solution: 'Standardized all images in our ‘360 Rocks’ dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.',
  },
  {
    id: 4,
    title: 'Robust Classification',
    challenge: 'Our initial dataset was a wild mix of image sizes and colors. A machine learning model thrives on consistency.',
    solution: 'Standardized all images in our ‘360 Rocks’ dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.',
  },
  {
    id: 5,
    title: 'Generative Validation',
    challenge: 'Our initial dataset was a wild mix of image sizes and colors. A machine learning model thrives on consistency.',
    solution: 'Standardized all images in our ‘360 Rocks’ dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.',
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
            From Pixels to Patterns: How We Taught a Machine to See - The Visual & Quantitative Deep Dive
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
              Ever wonder how your phone's gallery can recognize faces or how a self-driving car
              navigates the world? It all comes down to teaching machines to "see" and
              understand images. We recently tackled a similar challenge: could we build a model
              that accurately interprets and classifies images?
            </p>
            <p>
              This wasn't just an academic exercise. We wanted to build a system that was smart,
              efficient, and--most importantly--didn't just "memorize" the answers. Here's a look
              at the technical problem we faced, the precise path we took, the quantitative results
              we achieved, and the key visualizations that guided our decisions along the way.
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
              Our goal was to develop an accurate image classification model, but the high
              dimensionality of image data presented a significant challenge. For instance, a
              256x256 pixel image has 65,536 features, leading to computational inefficiency
              and the curse of dimensionality, which causes sparse data, longer training times,
              and overfitting.
            </p>
            <p>
              Therefore, our problem was twofold:
            </p>
            <ul>
              <li>
                How can we efficiently reduce image data dimensionality (e.g., preserving 90%
                of variance) while retaining crucial information?
              </li>
              <li>
                How do we use this reduced data to train a robust classification model that
                performs well on new images?
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
              The project yielded highly successful results and several key takeaways that
              validate our approach. We achieved a massive data compression, reducing the
              image data by over 99.9% from 160,000 features down to a highly efficient set of
              just 146 components, all while retaining 90% of the essential visual information.
              This is a critical takeaway, as this efficiency makes the model ideal for the fast,
              lightweight mobile app we are building.
            </p>
            <p>
              More importantly, the results prove our model truly understands the data; the
              features it extracted were so meaningful that even the top two components alone
              could visually separate the different rock categories. This provides a powerful and
              reliable foundation, confirming that the final predictive AI is built on a solid
              understanding of the rocks' distinct visual patterns.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewMinerPage; 