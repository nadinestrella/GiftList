import React from 'react';
import { Link } from 'react-router-dom';

function ListToy({ kidName }) {
  return (
    <div className="generalContainer">
      <div>
        <h3>{kidName}</h3>
        <p>This is what we found for you</p>
        <p>Add in the bag 5 toys that you like the most</p>
      </div>
      <div>
        <ul>
          <li>toy</li>
          <li>toy</li>
          <li>toy</li>
          <li>toy</li>
          <li>toy</li>
        </ul>
      </div>
      <div>
        <p>Any match? Try again</p>
      </div>

      <div>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
  );
}

export default ListToy;
