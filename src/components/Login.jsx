import React from 'react';

function Login({ kidName, handleKidName }) {
  return (
    <div className="generalContainer">
      <h3 className="login_title">Welcome to My Gift List</h3>
      <p>What's your name?</p>
      <input type="text" placeholder=" Nadine" />
      <p>Email</p>
      <input type="text" placeholder="nadine@gmail.com" />
      <p>What's your son's name? </p>
      <input
        type="text"
        placeholder=" Liam "
        onChange={(ev) => {
          handleKidName(ev.target.value);
        }}
      />
    </div>
  );
}

export default Login;
