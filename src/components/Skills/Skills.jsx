import React, { useEffect, useRef } from "react";
import "./styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollAnimation from "react-animate-on-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const containerRef = useRef(null);

  const skillsData = [
    { category: "Languages", items: ["HTML", "CSS", "JavaScript", "Java", "Node.js"] },
    { category: "Frontend", items: ["React.js", "jQuery", "Spring Boot"] },
    { category: "Backend", items: ["Spring Boot", "Express.js"] },
    { category: "Databases", items: ["MySQL", "MS SQL Server", "MongoDB"] },
    { category: "Tools", items: ["Postman", "Git Bash", "Bitbucket", "Jira"] },
    { category: "IDEs", items: ["Eclipse", "IntelliJ IDEA", "STS"] },
    { category: "Design", items: ["Figma", "Canva", "Wix Studio"] },
    { category: "Others", items: ["MS Office Suite"] },
  ];

  // Array of animation presets
  const animations = [
    { y: -100, rotationX: -90, opacity: 0 }, // flipDown
    { y: 100, rotationX: 90, opacity: 0 },  // flipUp
    { x: -100, rotationY: -90, opacity: 0 }, // flipLeft
    { x: 100, rotationY: 90, opacity: 0 },  // flipRight
    { y: 50, opacity: 0, scale: 0.8 },       // fadeUp
    { y: -50, opacity: 0, scale: 0.8 },      // fadeDown
    { x: 50, opacity: 0, scale: 0.8 },       // fadeLeft
    { x: -50, opacity: 0, scale: 0.8 },      // fadeRight
  ];

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".ag-courses_item");

    cards.forEach((card, index) => {
      const anim = animations[index % animations.length]; // cycle animations

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play reverse play reverse", 
          markers: false,
        },
        ...anim,
        duration: 1,
        ease: "power4.out",
        delay: index * 0.1,
      });

      // Hover tilt + pop effect
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateX = ((y - midY) / midY) * 10;
        const rotateY = ((x - midX) / midX) * -10;
        gsap.to(card, { rotationX: rotateX, rotationY: rotateY, scale: 1.05, duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="ag-format-container" ref={containerRef}>
   <ScrollAnimation animateIn="fadeInDown">
        <h2 className="timeline-heading">My Skills </h2>
      </ScrollAnimation>

      <div className="ag-courses_box">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">{skill.category}</div>
              <div className="ag-courses-item_date-box">
                {skill.items.map((item, i) => (
                  <span key={i} className="ag-courses-item_date">
                    {item}
                    {i < skill.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
