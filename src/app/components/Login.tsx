import React from 'react';

export const Login = ({ kidName, handleKidName }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <h3 className="text-lg pt-3">Welcome to My Gift List</h3>
      <form className="flex flex-col justify-center items-center content-center gap-4">
        <label>What is your name?</label>
        <input type="text" placeholder=" Nadine" />
        <label>Email</label>
        <input type="text" placeholder="nadine@gmail.com" />
        <label>What is your son is name? </label>
        <input
          type="text"
          placeholder=" Liam "
          onChange={(ev) => {
            handleKidName(ev.target.value);
          }}
        />
      </form>
    </div>
  );
};
