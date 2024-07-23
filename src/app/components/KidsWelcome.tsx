import React from 'react';

export const KidsWelcome = ({ kidName, handleKidAge, kidAge }) => {
  // const navigate = useNavigate();

  const handleChange = (ev) => {
    //coge el valor del input
    handleKidAge(ev.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center content-center gap-4">
        <span>Hello!! {kidName}</span>
        <form className="flex flex-col justify-center items-center content-center gap-4">
          <label>How old are you?</label>
          <input
            minLength={1}
            maxLength={2}
            type="number"
            placeholder="5"
            value={kidAge}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};
