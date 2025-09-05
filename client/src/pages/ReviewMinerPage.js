import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewMinerPage.css';

const challenges = [
  {
    id: 1,
    title: 'Designing for Contextual Feedback',
    challenge: `How do we enable reviewers to give feedback directly on the visual elements of a portfolio, eliminating the "where is the feedback for?" problem?`,
    solution: ` I engineered a core annotation feature that allows reviewers to click on any element of a portfolio and leave a comment. This was a significant UI/UX challenge requiring a precise front-end implementation to ensure that annotations were tied to the correct on-screen element, regardless of screen size or layout. I used a custom-built solution to capture element coordinates and display the feedback in a sidebar, providing immediate visual context.`,
  },
  {
    id: 2,
    title: 'Consolidating Disparate Feedback Streams',
    challenge: `How can we centralize feedback from multiple reviewers into a single, organized dashboard, reducing the manual work for the feedback seeker?`,
    solution: `I designed a comprehensive dashboard that acts as a single source of truth for all feedback. This required full-stack development to manage user authentication and data storage. Using a combination of a front-end framework like React and a backend with Node.js, I built a system that ingests feedback from various sources (the annotation tool, guided questions, etc.) and presents it in an intuitive, filterable view, effectively eliminating the need for designers to use spreadsheets or other manual methods.`,
  },
  {
    id: 3,
    title: 'Encouraging High-Quality, Actionable Feedback',
    challenge: `Reviewers often don't know what kind of feedback to give, resulting in generic comments that aren't helpful. How do we guide them to provide more meaningful input?`,
    solution: `I implemented a feature with guiding questions that designers can provide to their reviewers. This feature presents a small modal with 2-3 specific questions when a reviewer starts to comment, such as "What is your feedback on the project's visual hierarchy?" or "Is the case study's narrative clear?". This UI/UX pattern was designed to prime the reviewer for more focused critique and directly address the problem of "lack of direction" identified in my user research.`,
  },
  {
    id: 4,
    title: 'Building a Smart, Data-Driven Interface',
    challenge: `How can we help designers make sense of a large quantity of feedback and identify high-level themes for improvement?`,
    solution: `I integrated an AI-powered summarization tool into the feedback dashboard. This feature, leveraging API calls to a large language model, analyzes all the comments on a portfolio and generates a concise summary of recurring themes and common suggestions. This feature provides a high-level overview, helping designers prioritize their work and focus on macro-level improvements rather than getting lost in the details.`,
  },
  {
    id: 5,
    title: 'User-Centric Development',
    challenge: ` I needed to validate my ideas and build a working MVP quickly.`,
    solution: `I conducted several rounds of usability testing with semi-structured interviews and coded the feedback into themes. Based on these insights, I rapidly prototyped the MVP with the MERN stack. This iterative, data-driven approach allowed me to build core features like the annotation tool and a centralized dashboard, proving the value of the product before moving to more advanced features.`,
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
            <span>🏷️ Web Development</span>
          </div>
          <h1 className="project-title">
          From Chatter to Clarity: How We Taught a Machine to Understand the Voice of the Customer - An NLP & LLM Deep Dive
          </h1>
        </div>
        <img 
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/floop/ENsbeK202poM2378B34BjFR0M.avif" 
          alt="Project" 
          className="project-image" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="project-description">
          <h2 className="description-title">Project description</h2>
          <div className="description-text">
            <p>
            Current user workflows for requesting feedback on creative projects are disjointed and inefficient. Users must manually share their work across various platforms—sending files via email, gathering comments from chat applications, and consolidating notes from multiple sources. This fragmented process leads to lost or forgotten feedback, delays in project timelines, and a frustrating experience for both the person seeking feedback and the reviewers. We need a centralized system that streamlines this process and improves the quality of feedback.
            </p>
            
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/floop/5cGJywfIgxYn5cDfe1dtvUqx5I.avif"
          alt="Placeholder"
          className="placeholder-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div className="project-description">
          <h3 className="description-title">The Problem statement:</h3>
          <div className="description-text">
            <p>
            Junior designers seeking portfolio reviews face a two-pronged problem that hinders their growth:
            </p>
            
            <ul>
              <li>
              <b>Feedback Fragmentation and Disorganization:</b> Feedback is often scattered across different platforms like email, chat messages, and informal notes. This fragmentation makes it difficult for designers to consolidate, track, and manage all the comments, leading to a disorganized and inefficient review process.
              </li>
              <li>
              <b>Low-Context and Inactionable Feedback:</b> Without a visual connection to the specific part of the portfolio being critiqued, feedback from mentors and peers can be vague and confusing. This low-context feedback leaves junior designers guessing about what to change and what to keep, making it difficult to translate comments into actionable improvements.
              </li>
            </ul>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/floop/X8KuLI30bkiCxGak99pclHyA958.avif"
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
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/floop/znlUXrhBhDKCal0BTCsAHt95Zo.avif"
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
            Floop successfully helped feedback seekers manage and organize reviews 3x more efficiently, with user validation confirming a significant reduction in time spent consolidating feedback and a higher perceived quality of comments. The project was recognized for its innovation, winning the Most Innovative Idea at InnoQuest Innovation competition.
            </p>
            <p>
            <b>The MERN stack is a powerful tool for a unified development experience.</b> By using a single language (JavaScript) across the entire stack, I was able to rapidly build, debug, and iterate on both the front-end and back-end logic.

            <p>
            <b>UI/UX is a core component of full-stack development.</b> The technical implementation of features like direct annotation and a centralized dashboard was meaningless without a deep, user-centric understanding of the problem.
            </p>
            <p>
            <b>A simple tool can solve a complex problem.</b> The two-fold problem of fragmentation and low-context feedback was elegantly solved by focusing on the core user needs of organization and visual context.
            </p>
            <p>
            <b>Feedback is the engine of iteration.</b> Continuously seeking and incorporating user feedback was crucial for validating assumptions and prioritizing the right features. The project's success was a direct result of this iterative, user-focused process.
            </p>


            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewMinerPage; 