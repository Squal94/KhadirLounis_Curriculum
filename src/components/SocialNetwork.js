import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="www.linkedin.com/in/lounis-khadir-b35a93296"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://fr.indeed.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-solid fa-info"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
