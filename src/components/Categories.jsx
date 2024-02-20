import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div className="generalContainer">
      <h3>What do you like to play with? </h3>
      <p>Choose as many plays as you like</p>
      <ul>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego </li>
        <li>juego </li>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego 1</li>
      </ul>
      <Link to="/listtoy">
        <input type="submit" value="Next!" className="inputNext" />
      </Link>
      <div className="header__icons">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    </div>
  );
}

export default Categories;
