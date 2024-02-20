import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function KidsWelcome() {
  const navigate = useNavigate();

  return (
    <>
      <div className="generalContainer">
        <div>
          <h3>Hello!!</h3>
          <p>Liam</p>

          <p>How old are you?</p>
          <input type="text" placeholder=" 5" />
        </div>
      </div>
    </>
  );
}

export default KidsWelcome;
