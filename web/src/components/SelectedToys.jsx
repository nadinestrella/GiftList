import React from 'react';
import { Link } from 'react-router-dom';

function SelectedToys({ kidName }) {
  return (
    <div className="generalContainer">
      <div>
        <p>{kidName} </p>
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
    </div>
  );
}

export default SelectedToys;
