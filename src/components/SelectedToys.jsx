import React from 'react';
import { Link } from 'react-router-dom';

function SelectedToys() {
  return (
    <div>
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
      <Link to="/FinalList">
        <input type="submit" Next />
      </Link>
    </div>
  );
}

export default SelectedToys;
