import React from 'react';

function Login({ kidName, handleKidName }) {
  return (
    <div className="generalContainer">
      <div className="login">
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
            type="email"
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
          <input className="login__cleanBtn" type="reset" value="Clean" />
        </form>
      </div>
    </div>
  );
}

export default Login;
