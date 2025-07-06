import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SmartStockPage.css';

const challenges = [
  {
    id: 1,
    title: 'Data Integrity and Redundancy',
    challenge: 'The initial dataset suffered from poor data integrity, characterized by a high volume of missing data and significant data redundancy. Specifically, the dataset contained 9,681 instances with null values and 1,161 redundant duplicate rows, which would compromise model training and validation',
    solution: 'To ensure a high-quality training set, a listwise deletion approach was implemented. All rows containing null values and all identified duplicate rows were systematically expunged from the dataset. This deduplication and cleaning process yielded a refined dataset suitable for regression analysis.',
  },
  {
    id: 2,
    title: 'Empirical Model Selection',
    challenge: 'The project required identifying the optimal regression algorithm from a pool of five candidates: Linear Regression, Support Vector Machine (SVM), Decision Tree, Random Forest, and XGBoost. Selecting a suboptimal model could lead to low predictive accuracy and high error rates.',
    solution: `A comparative performance analysis was conducted by training each of the five models on the dataset. The models were evaluated using standard regression metrics: 
    <li>Mean Squared Error (MSE) and the Coefficient of Determination (R²). The empirical results showed that the ensemble models, Random Forest and XGBoost, demonstrated superior performance with the highest R² scores and lowest MSE.</li>`,
  },
  {
    id: 3,
    title: 'Categorical Feature Encoding',
    challenge: "The dataset contained categorical features, such as business_code, which are incompatible with regression algorithms that require numerical input vectors. This necessitated a feature engineering step to transform the data.",
    solution: "To handle the categorical variables, Label Encoding was employed. The business_code feature was transformed into a numerical representation, creating a new business_code_enc column. This encoding step allowed for the seamless integration of the feature into the Decision Tree and other machine learning models.",
  },
  {
    id: 4,
    title: 'Mitigating Overfitting and High Variance',
    challenge: 'The Support Vector Machine model exhibited high variance and poor generalization, indicated by a negative R² score attributed to data clustering and overfitting. Furthermore, preventing the model from overfitting the training data at the expense of generalization error was a primary concern.',
    solution: "To promote model generalization, the dataset was partitioned into training, validation, and testing subsets. Additionally, ensemble learning methods were utilized, specifically Random Forest, which leverages averaging (a form of bagging) to reduce variance and decrease overfitting. This resulted in a model with a high R² score and strong predictive performance on the test set.",
  },
  // {
  //   id: 5,
  //   title: 'Generative Validation',
  //   challenge: 'Our initial dataset was a wild mix of image sizes and colors. A machine learning model thrives on consistency.',
  //   solution: "Standardized all images in our '360 Rocks' dataset to 64x64 pixels and converted to grayscale. This ensured consistent 4,096 features per image while reducing data volume by two-thirds, allowing focus on shapes and textures rather than color variations.",
  // },
];

const SmartStockPage = () => {
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
          Decoding the Due Date: A Machine Learning Approach to Loan Payment Forecasting
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
            Ever wonder how a bank decides whether to lend money or how they plan for the future? It all comes down to understanding risk and predicting when loans will be repaid. We recently tackled this very challenge: could we build a model that accurately predicts the payment date for a loan?
            </p>
            <p>
            This wasn't just an academic exercise. We wanted to build a system that could help a financial institution make smarter business decisions by forecasting its cash flow. To do this, we had to teach a machine to look at a borrower's history and other attributes to predict a future payment date.
            </p>
            <p>
            Here's a look at the raw data we started with, the cleaning process we undertook, the different machine learning models we tested, the quantitative results we achieved, and the key insights that led us to our final, most accurate model.
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
            Our goal was to develop an accurate model to predict loan payment dates, but two primary challenges stood in our way: the quality of the raw data and the selection of the right algorithm. A model is only as good as the data it's trained on, and our initial dataset was filled with inconsistencies, including thousands of null values and duplicate entries, which would lead to unreliable predictions. Furthermore, with multiple regression algorithms available, choosing the wrong one could result in a model that fails to capture the complex patterns in financial data.
            </p>
            <p>
              Therefore, our problem was twofold:
            </p>
            <ul>
              <li>
              How can we systematically clean and process a raw financial dataset to ensure it provides a stable and reliable foundation for a predictive model?
              </li>
              <li>
              How do we evaluate and compare multiple regression algorithms to identify the one that most accurately forecasts loan payment dates on new, unseen data?
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

export default SmartStockPage;