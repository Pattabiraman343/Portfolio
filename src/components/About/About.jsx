import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./styles.css";
import Illustration from "../../assets/Screenshot 2025-08-30 122226.png"

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ChillPointer() {
  useEffect(() => {
    const pointerXTo = gsap.quickTo("#pointer-unique", "x", {
      duration: 0.3,
      ease: "power5",
    });

    const pointerYTo = gsap.quickTo("#pointer-unique", "y", {
      duration: 0.3,
      ease: "power5",
    });

    const moveHandler = (e) => {
      pointerXTo(e.pageX - window.scrollX);
      pointerYTo(e.pageY - window.scrollY);
    };

    document.addEventListener("mousemove", moveHandler);

    // Floating arrow animation
    gsap.to(".arrow-unique", {
      y: 5,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    // Split text effect
    const split = SplitText.create(".para-unique", {
      type: "words",
      wordsClass: "word-unique",
    });

    gsap.set(split.words, { opacity: 0.2, y: 40 });

    gsap.to(".word-unique", {
      scrollTrigger: {
        trigger: ".para-unique",
        start: "top 80%",
        scrub: true,
        end: "bottom 60%",
        onUpdate: (self) => {
          gsap.to("#pointer-unique", {
            scale: 1 + self.progress * 12,
            rotate: `${180 * 1.5 * self.progress}deg`,
            skewY: `${self.progress / 10}rad`,
          });
        },
      },
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Image reveal animations
    gsap.utils.toArray(".cool-image").forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 80, scale: 1.1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      document.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div className="chill-body-unique">
      {/* Side vertical headings */}
      <h1 className="vertical-heading left">Software Developer </h1>
      <h1 className="vertical-heading right">Software Developer</h1>

      {/* Image section */}
      <div className="image-section">
        <img
          src={Illustration}
          alt="Cool visual"
          className="cool-image"
        />
      </div>

      {/* New heading after image */}
      <h2 className="content-heading">About Me</h2>

      {/* Paragraph section */}
      <div className="content-section">
        <p className="para-unique">
          I am an experienced and adaptable Full Stack Developer with a strong
          foundation in both frontend and backend development. With hands-on
          expertise in React.js, Node.js, Spring Boot, and MySQL/MongoDB, I have
          built and deployed scalable, secure, and user-focused web applications
          across domains like real estate, e-commerce, and trading platforms. I
          enjoy solving problems, optimizing performance, and creating intuitive
          user experiences.
          <br />
          <br />
          Beyond coding, I bring strong collaboration and communication skills,
          having worked closely with cross-functional teams and clients to
          translate requirements into reliable solutions. I am passionate about
          continuous learning, keeping up with modern technologies, and
          delivering high-quality projects on time.
        </p>
      </div>

      {/* Pointer removed for now */}
      {/* <div id="pointer-unique"></div> */}
    </div>
  );
}
