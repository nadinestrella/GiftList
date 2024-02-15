import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Welcome to My Gift List</h1>
      <p>What's your name?</p>
      <input type="text" />
      <p>Email</p>
      <input type="text" />
      <p>What's your son's name? </p>
      <input type="text" />
      <Link to="/KidsWelcome">
        <input type="submit" Next />
      </Link>
    </div>
  );
}

export default Login;
