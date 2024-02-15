import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__icons">
        <i className="fa-solid fa-arrow-left"></i>

        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="header__titleContainer">
        <h1>My Gift List </h1>
      </div>
    </header>
  );
}

export default Header;
