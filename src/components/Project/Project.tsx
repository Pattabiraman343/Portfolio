import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Berachah Academy */}
      {/* AI-Powered SWOT Analysis Tool */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        fill="none"
        stroke="#23ce6b"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    </header>
    <div className="body">
      <h3>AI-Powered SWOT Analysis Tool</h3>
      <p>
        Built an AI-based SWOT generator using Groq AI API. Created a
        20-question model covering Strengths, Weaknesses, Opportunities, and
        Threats. Automated real-time SWOT report generation, enabled one-click
        PDF downloads, and delivered a full-stack solution with React.js
        (frontend) and Node.js/Express.js (backend).
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Groq AI API</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>PDF Generation</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>


        {/* Rosemallow Technologies */}
      {/* Trading & Banking Platform (Admin Dashboard) */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        fill="none"
        stroke="#007bff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h18v4H3z" />
        <path d="M3 11h18v10H3z" />
        <path d="M8 7v14" />
        <path d="M16 7v14" />
      </svg>
    </header>
    <div className="body">
      <h3>Trading & Banking Platform (Admin Dashboard)</h3>
      <p>
        Designed and developed a dynamic trading and banking platform for CGS,
        Singapore. Built a secure admin dashboard with Java Spring Boot and
        MySQL, and implemented frontend modules using React.js and jQuery.
        Delivered features for real-time transaction management, client account
        monitoring, and optimized backend performance.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Java Spring Boot</li>
        <li>React.js</li>
        <li>jQuery</li>
        <li>MySQL</li>
        <li>Admin Dashboard</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>


        {/* Sofelit */}
      {/* E-commerce Platform */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        fill="none"
        stroke="#ff6f61"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M6 6h15l-1.5 9h-13z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    </header>
    <div className="body">
      <h3>E-commerce Platform</h3>
      <p>
        Built a scalable system with Spring Boot, React.js, and MySQL. 
        Integrated secure payments, optimized backend logic, and improved 
        checkout efficiency for smoother transactions.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Spring Boot</li>
        <li>React.js</li>
        <li>MySQL</li>
        <li>Secure Payments</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>

{/* Corporate Portfolio */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        fill="none"
        stroke="#4cafef"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    </header>
    <div className="body">
      <h3>Corporate Portfolio</h3>
      <p>
        Delivered a dynamic portfolio using Node.js, Express, and React.js. 
        Implemented reusable components and improved performance, 
        cutting load time by 25%.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>Reusable Components</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>

{/* Career Counseling Portal */}
<ScrollAnimation animateIn="flipInX">
  <div className="project">
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        fill="none"
        stroke="#28a745"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l4 4-4 4-4-4z" />
        <path d="M2 12l4-4 4 4-4 4z" />
        <path d="M12 22l-4-4 4-4 4 4z" />
        <path d="M22 12l-4 4-4-4 4-4z" />
      </svg>
    </header>
    <div className="body">
      <h3>Career Counseling Portal</h3>
      <p>
        Designed a responsive platform with Wix Studio, featuring 
        appointment booking and engagement tools. Boosted client 
        interaction and improved accessibility.
      </p>
    </div>
    <footer>
      <ul className="tech-list">
        <li>Wix Studio</li>
        <li>Responsive Design</li>
        <li>Booking Features</li>
        <li>Client Engagement</li>
      </ul>
    </footer>
  </div>
</ScrollAnimation>


        {/* Besant Technologies Internship */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
            </header>
            <div className="body">
              <h3>Besant Technologies (Internship)</h3>
              <p>Completed hands-on training in MERN & Java stack, developing mini-projects to strengthen full-stack development fundamentals.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MERN</li>
                <li>Java</li>
                <li>Mini-projects</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* MDT Hindu College */}
       

        {/* Certifications */}
       
      </div>
    </Container>
  );
}
