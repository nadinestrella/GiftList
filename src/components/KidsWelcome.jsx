import { useNavigate } from 'react-router-dom';

function KidsWelcome({ kidName, handleKidAge, kidAge }) {
  const navigate = useNavigate();

  const handleChange = (ev) => {
    //coge el valor del input
    handleKidAge(ev.target.value);
  };

  return (
    <>
      <div className="generalContainer">
        <h3>Hello!!</h3>
        <p>
          <strong>{kidName}</strong>
        </p>
        <form className="login__form">
          <label>How old are you?</label>
          <input
            minLength={1}
            maxLength={2}
            type="number"
            placeholder="5"
            value={kidAge}
            onChange={handleChange}
            required
          />
        </form>
      </div>
    </>
  );
}

export default KidsWelcome;
