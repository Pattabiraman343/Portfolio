import React from "react";
import "./styles.css";
import ScrollAnimation from "react-animate-on-scroll";

const timelineData = [
  { year: "2025", title: "Sofelit Solution", description: "Engineered a trading platform for CGS Singapore using React.js, Spring Boot & MySQL with high-performance backend." },
  { year: "2023", title: "Rosemallow Technologies", description: "Built real estate & e-commerce apps with React.js and Spring Boot, ensuring secure data and smooth user experience." },
  { year: "2022", title: "Besant Technologies", description: "Hands-on MERN & Java stack training with mini-projects to sharpen full-stack skills." },
  { year: "2019", title: "MDT Hindu College", description: "Built strong foundations in software development, databases, and web design." },
  { year: "2018", title: "Certifications", description: "Earned certifications in Office Automation, Programming Concepts & Web Designing." },
];

export default function Timeline2() {
  return (
    <>


      <ScrollAnimation animateIn="flipInX">
        
        <div className="row">
        <ScrollAnimation animateIn="fadeInDown">
        <h2 className="timeline-heading">My Professional Timeline</h2>
      </ScrollAnimation>
          <div className="main-timeline">
            {timelineData.map((item, index) => (
              <div className="timeline" key={index}>
                <a href="#" className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}
