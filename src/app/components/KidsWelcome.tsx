import React from 'react';

export const KidsWelcome = ({ kidName, handleKidAge, kidAge }) => {
  // const navigate = useNavigate();

  const handleChange = (ev) => {
    //coge el valor del input
    handleKidAge(ev.target.value);
  };

  return (
    <>
      <div className="generalContainer">
        <div>
          <h3>Hello!!</h3>
          <p>{kidName}</p>

          <p>How old are you?</p>
          <input
            minLength={1}
            maxLength={2}
            type="number"
            placeholder="5"
            value={kidAge}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
