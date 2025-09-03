import React, { useEffect, useState } from "react";
import gsap from "gsap";
import logo from "../../assets/ChatGPT Image Aug 30, 2025, 11_34_15 AM.png";
import resumePDF from "../../assets/Pattabi_Resume.pdf"; // ✅ Add your resume file inside assets folder

const CoolNavbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".nav-menu");
    const menuLinks = document.querySelectorAll(".nav-menu a");
    const overlay = document.querySelector(".overlay");
    const barTop = document.querySelector(".bar-top");
    const barMiddle = document.querySelector(".bar-middle");
    const barBottom = document.querySelector(".bar-bottom");

    let isOpen = false;

    const openMenu = () => {
      overlay.style.display = "block";
      gsap.to(navMenu, { x: 0, duration: 0.7, ease: "power4.out" });
      gsap.fromTo(
        menuLinks,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 0.2 }
      );
      gsap.to(barTop, { y: 8, rotate: 45, background: theme === "dark" ? "#ff0055" : "#212121", duration: 0.5 });
      gsap.to(barMiddle, { opacity: 0, duration: 0.3 });
      gsap.to(barBottom, { y: -8, rotate: -45, background: theme === "dark" ? "#ff0055" : "#212121", duration: 0.5 });
      isOpen = true;
    };

    const closeMenu = () => {
      gsap.to(navMenu, { x: "-100%", duration: 0.7, ease: "power4.in" });
      gsap.to(menuLinks, { opacity: 0, y: 50, duration: 0.3 });
      gsap.to(barTop, { y: 0, rotate: 0, background: theme === "dark" ? "#fff" : "#212121", duration: 0.5 });
      gsap.to(barMiddle, { opacity: 1, duration: 0.3 });
      gsap.to(barBottom, { y: 0, rotate: 0, background: theme === "dark" ? "#fff" : "#212121", duration: 0.5 });
      overlay.style.display = "none";
      isOpen = false;
    };

    menuButton?.addEventListener("click", () => (isOpen ? closeMenu() : openMenu()));
    overlay?.addEventListener("click", closeMenu);

    return () => {
      menuButton?.removeEventListener("click", () => {});
      overlay?.removeEventListener("click", () => {});
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <>
      <header className={`navbar ${theme}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="menu-wrapper">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button className="menu-button">
            <div className="bar bar-top"></div>
            <div className="bar bar-middle"></div>
            <div className="bar bar-bottom"></div>
          </button>
        </div>
      </header>

      <div className="overlay"></div>

      <nav className={`nav-menu ${theme}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* ✅ Resume Download Link */}
          <li>
            <a href={resumePDF} download="Pattabi_Raman_Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <style>{`
        body.dark { background: #111; color: #fff; }
        body.light { background: #f5f5f5; color: #212121; }

        .navbar {
          position: fixed; top:0; left:0; width:100%;
          display:flex; justify-content:space-between; align-items:center;
          padding:10px 20px; background: transparent; z-index:1003;
        }

        .logo img { width: 120px; }

        .menu-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .theme-toggle {
          padding: 6px 12px;
          border-radius: 1rem;
          background: ${theme === "dark" ? "#fff" : "#212121"};
          color: ${theme === "dark" ? "#111" : "#fff"};
          border:none; cursor:pointer;
          font-size: 1rem;
        }

        .menu-button {
          width:50px; height:50px; display:flex; flex-direction:column;
          justify-content:center; align-items:center;
          background: ${theme === "dark" ? "#000" : "#fff"};
          border:none; cursor:pointer;
        }

        .bar { width:30px; height:4px; margin:5px 0; border-radius:2px; background: ${theme === "dark" ? "#fff" : "#212121"}; }

        .overlay {
          position:fixed; top:0; left:0; width:100%; height:100%;
          background: rgba(0,0,0,0.5); display:none; z-index:1000;
        }

        .nav-menu {
          position: fixed; top:0; left:0; width:300px; height:100%;
          background: ${theme === "dark" ? "#111" : "#fff"};
          color: ${theme === "dark" ? "#fff" : "#212121"};
          transform: translateX(-100%);
          display:flex; align-items:center; justify-content:center; z-index:1002;
        }

        .nav-menu ul { list-style:none; padding:0; text-align:center; }
        .nav-menu ul li { margin:20px 0; }
        .nav-menu ul li a {
          font-size:24px; color: ${theme === "dark" ? "#fff" : "#212121"}; text-decoration:none; transition: transform 0.3s;
        }
        .nav-menu ul li a:hover { transform: scale(1.2) rotate(-5deg); color: #ff0055; }

        @media (max-width: 768px) {
          .logo img { width:90px; }
          .menu-button { width:40px; height:40px; }
          .bar { width:25px; height:3px; }
          .nav-menu ul li a { font-size:20px; }
        }
      `}</style>
    </>
  );
};

export default CoolNavbar;
