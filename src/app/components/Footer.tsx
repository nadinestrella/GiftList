import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-around justify-center items-center relative  bg-background3 text-white py-4">
      <p className="md:text-sm">By Nadine Estrella</p>

      <div className="flex flex-row justify-center gap-8 md:gap-5 ">
        <a
          href="https://www.linkedin.com/in/nadinestrellavacas/"
          target="_blank"
          className="hover:text-background3"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href="https://github.com/nadinestrella"
          target="_blank"
          className="hover:text-background3"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};
