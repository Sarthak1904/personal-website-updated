import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogStream360Page.css';

const challenges = [
  {
    id: 1,
    title: 'Designing for the Entire User Journey',
    challenge: `Our initial project focused on a browser extension for a single task: quickly saving job listings. We quickly realized this was a narrow solution to a much broader problem. The user's journey extends far beyond saving a link, it includes tracking applications, managing contacts, and preparing for interviews.`,
    solution: `We pivoted to a full-scale web application to create a single, comprehensive platform. This required a complete redesign of our information architecture and a focus on mapping out the entire user flow, from initial search to offer acceptance. I used Figma to build out the wireframes and high-fidelity mockups, ensuring a seamless and intuitive experience across all stages of the job hunt.`,
  },
  {
    id: 2,
    title: 'Bridging the Gap Between Extension and Web App',
    challenge: `The user experience needed to feel seamless between the lightweight browser extension and the robust web application. A user should be able to save a job in one click via the extension and see it instantly reflected in their main dashboard on the web app. This required real-time data synchronization.`,
    solution: `I implemented a RESTful API and leveraged full-stack development to create a shared backend. The extension communicated with the API to save job data, and the web application fetched this data in real-time. This ensured data consistency and a cohesive user experience, no matter which tool the user was on.`,
  },
  {
    id: 3,
    title: 'Building a Scalable Frontend',
    challenge: `The application's dashboard required dynamic and complex UI components, such as a Kanban board for tracking applications and a calendar for scheduling interviews. We needed a frontend framework that could handle state management efficiently and scale as we added more features.`,
    solution: `I chose React as the primary frontend library. Its component-based architecture allowed for modular, reusable code. I used React Hooks to manage component state and implemented a robust state management pattern to handle the flow of data across the application. This approach ensured that the UI remained performant and easy to maintain as the project grew.`,
  },
  {
    id: 4,
    title: 'Ensuring a Responsive and Accessible Design',
    challenge: `Job seekers use various devices, from desktops to mobile phones, often while on the go. The application needed to be fully responsive to provide a consistent experience on any screen size. Additionally, we aimed to meet WCAG 2.1 guidelines to ensure accessibility for all users.`,
    solution: `I adopted a mobile-first design approach using CSS Flexbox and Grid for layout. I conducted thorough testing on multiple screen sizes and integrated accessibility checks into the development workflow. This included ensuring proper color contrast, keyboard navigation, and meaningful ARIA attributes on interactive elements..`,
  },
  {
    id: 5,
    title: 'User-Centric Development',
    challenge: `We needed to validate our design choices and ensure the application truly solved the user's problems. It was crucial to avoid building features that sounded good on paper but didn't meet real-world needs.`,
    solution: `I conducted several rounds of usability testing and implemented a feedback loop. Using Hotjar and user interviews, we identified pain points and iterated on our designs. This continuous feedback process allowed us to prioritize features like a simple resume builder and a notes section, directly addressing the most pressing user needs.`,
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
            <span>🏷️ Web Development</span>
          </div>
          <h1 className="project-title">
          Joblyst
          </h1>
        </div>
        <img 
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/joblyst%20images/k3Tqj5yOWBYlcdyZFNMjCb8rw.webp" 
          alt="Project" 
          className="placeholder-block" 
        />
        <div className="project-description">
          <h2 className="description-title">Project description</h2>
          <div className="description-text">
            <p>
            Job seekers often struggle to manage the multiple facets of their search, from tracking applications to preparing for interviews. While a browser extension can assist with small, in-the-moment tasks, it fails to provide a holistic, centralized platform for the entire journey. Therefore, there is a clear need for a comprehensive web application that can handle more intricate interactions and serve as a single source of truth for all job search activities.
            </p>
            
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/joblyst%20images/v6pzu0Er7sHDx7sdtz6aDR4EIFY.webp"
          alt="Placeholder"
          className="placeholder-block"
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
              <b>Fragmentation of Effort:</b> There is a fundamental lack of a centralized platform to manage the diverse tasks of a job search. Job seekers must manually juggle multiple tools—spreadsheets for tracking applications, calendars for scheduling interviews, and various websites for company research. This disjointed approach leads to inefficiency, data loss, and an increased mental load, making the process overwhelming and prone to errors.
              </li>
              <li>
              <b>Disconnection Between Action and Data:</b> The most crucial actions, such as finding and saving a job, often occur on third-party websites. However, the data from these actions (e.g., job description, company name, application deadline) is not seamlessly captured and integrated into the user's personal management system. Our initial solution, a basic browser extension, only partially addressed this, acting as a simple bookmarking tool rather than a bridge to a comprehensive tracking system. This disconnect prevents users from building a holistic, searchable, and actionable history of their job search efforts.
              </li>
            </ul>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/joblyst%20images/9cgB6YFwZe326uLeBOR1Z0jRtA.webp"
          alt="Placeholder"
          className="placeholder-block"
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
          src="https://raw.githubusercontent.com/Sarthak1904/portfoilio-new-images/refs/heads/main/joblyst%20images/f3wXn8boqiB7GyhavBLkedgNoE.webp"
          alt="Placeholder"
          className="placeholder-block"
        />

        <div className="project-description">
          <div className="description-title">
            <strong>Result and key takeaway</strong>
          </div>
          <div className="description-text">
            <p>
            The web application successfully launched and received positive feedback from early users. They praised its ease of use, comprehensive features, and the seamless integration with the browser extension. Our solution provided a significant improvement over the fragmented tools previously used by job seekers.
            </p>
            <p>
            <li>User research is paramount. Pivoting from an extension to a web app was a direct result of listening to our users. A deep understanding of the problem space is essential before writing a single line of code.</li>
            <li>Full-stack skills are invaluable for UI/UX developers. Understanding how the frontend interacts with the backend is crucial for designing and implementing features like real-time data synchronization and APIs.</li>
            <li>Scalability matters. Choosing the right technology stack from the start—like React for a complex UI—pays dividends in the long run.</li>
            <li>Accessibility is not a feature, it's a foundation. Designing and developing with accessibility in mind from day one ensures a better product for everyone and avoids costly retrofitting later.</li>
            <li>Iterate and validate. Launching a perfect product is less important than launching a useful one. Continuous testing and a feedback loop are the most effective ways to build a product that users will love.</li>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogStream360Page; 