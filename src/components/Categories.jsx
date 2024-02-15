import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div>
      <h3>what do you like to play with? </h3>
      <p>Choose as many plays as you like</p>
      <ul>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego 1</li>
        <li>juego 2 </li>
        <li>juego 1</li>
        <li>juego 2 </li>
      </ul>
      <Link to="/listtoy">
        <input type="submit" />
      </Link>
    </div>
  );
}

export default Categories;
