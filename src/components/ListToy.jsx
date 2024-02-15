import React from 'react';
import { Link } from 'react-router-dom';

function ListToy() {
  return (
    <div>
      <div>
        <h3>FULATINO</h3>
        <p>This is what we found for you</p>
        <p>Add in the bag 10 toys that you like the most</p>
      </div>
      <div>
        <p>Any match? Try again</p>
        <Link to="/SelectedToys">
          <input type="submit" />
        </Link>
      </div>
      <div>IMAGEN BOLSA</div>
    </div>
  );
}

export default ListToy;
