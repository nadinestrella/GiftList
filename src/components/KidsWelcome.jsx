import React from 'react';
import { Link } from 'react-router-dom';

function KidsWelcome() {
  return (
    <div>
      <h1>Hello!!</h1>
      <p>FULANITO</p>

      <p>How old are you?</p>
      <input type="text" />
      <Link to="/Categories">
        <input type="submit" />
      </Link>
    </div>
  );
}

export default KidsWelcome;
