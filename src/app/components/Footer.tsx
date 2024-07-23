import React from 'react';

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center relative -bottom-9 text-white">
      <p>By Nadine Estrella</p>

      <div className="footer__icons">
        <i className="fa-brands fa-linkedin">icono linkedin</i>

        <i className="fa-brands fa-github">icono git</i>
      </div>
    </footer>
  );
};
