import React, { useEffect, useRef } from "react";
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import Illustration from "../../assets/vecteezy_software-engineer-png-graphic-clipart-design_20962986.png"
import { Form } from "../Form/Form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: leftRef.current,
        start: "top 80%",
      },
    });

    gsap.from(rightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <Container id="contact">
      <div className="contact-wrapper">
        {/* Left Image */}
        <div className="left" ref={leftRef}>
          <img src={Illustration} alt="Contact Illustration" />
        </div>

        {/* Right Contact */}
        <div className="right" ref={rightRef}>
          <header>
            <h2>Contact</h2>
            <p>Ready to get started work</p>
          </header>

          <div className="contacts">
            <div className="card">
              <a href="mailto:ramanpattabi843@gmail.com" className="icon">
                <img src={emailIcon} alt="Email" />
              </a>
              <a href="mailto:ramanpattabi843@gmail.com" className="text">
              ramanpattabi843@gmail.com
              </a>
            </div>

            <div className="card">
              <a href="tel:+8190821221" className="icon">
                <img src={phoneIcon} alt="Phone No" />
              </a>
              <a href="tel:+8190821221" className="text">
                (+91) 8190821221
              </a>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </Container>
  );
}
