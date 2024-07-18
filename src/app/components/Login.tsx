import React from 'react';

export const Login = ({ kidName, handleKidName }) => {
  return (
    <div className="generalContainer">
      <h3 className="login_title">Welcome to My Gift List</h3>
      <p>What is your name?</p>
      <input type="text" placeholder=" Nadine" />
      <p>Email</p>
      <input type="text" placeholder="nadine@gmail.com" />
      <p>What is your son is name? </p>
      <input
        type="text"
        placeholder=" Liam "
        onChange={(ev) => {
          handleKidName(ev.target.value);
        }}
      />
    </div>
  );
};
