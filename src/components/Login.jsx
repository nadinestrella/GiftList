import React from 'react';

function Login({ kidName, handleKidName }) {
  return (
    <div className="generalContainer">
      <h3>Welcome to My Gift List</h3>
      <form className="login__form">
        <label htmlFor="name">What's your name?</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Nadine"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="nadine@gmail.com"
          required
        />
        <label htmlFor="kidName">What's your son's name? </label>
        <input
          id="idName"
          type="text"
          name="kidName"
          placeholder=" Liam "
          required
          onChange={(ev) => {
            handleKidName(ev.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Login;
