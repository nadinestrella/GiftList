import React from 'react';
import { Link } from 'react-router-dom';

function SelectedToys() {
  return (
    <div className="generalContainer">
      <div>
        <p>LIAM </p>
        <p> You've choosen these 10 toys!!</p>
      </div>
      <ul>
        <li>toy </li>
        <li>toy </li>
        <li>toy </li>
        <li>toy </li>
        <li>toy </li>
        <li>toy </li>
      </ul>
      <Link to="/finallist">
        <input type="submit" value="Next!" className="inputNext" />
      </Link>
      <div className="header__icons">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
    </div>
  );
}

export default SelectedToys;
