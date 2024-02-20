import React from 'react';

function Login() {
  return (
    <div className="generalContainer">
      <h3 className="login_title">Welcome to My Gift List</h3>
      <p>What's your name?</p>
      <input type="text" placeholder=" Nadine" />
      <p>Email</p>
      <input type="text" placeholder="nadine@gmail.com" />
      <p>What's your son's name? </p>
      <input type="text" placeholder=" Liam " />
    </div>
  );
}

export default Login;
