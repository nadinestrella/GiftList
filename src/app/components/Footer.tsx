import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center relative -bottom-9 text-white">
      <p>By Nadine Estrella</p>

      <div className="flex flex-row justify-center gap-8">
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
