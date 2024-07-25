import React, { ChangeEvent } from 'react';
import { InputForm } from './ui/InputForm';

interface KidsWelcomeProps {
  kidName: string;
  handleKidAge: (value: string) => void;
  kidAge: number;
}

export const KidsWelcome: React.FC<KidsWelcomeProps> = ({
  kidName,
  handleKidAge,
  kidAge,
}) => {
  // const navigate = useNavigate();

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    //coge el valor del input
    handleKidAge(ev.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center content-center gap-4">
        <span className="font-semibold">Hello!! {kidName}</span>
        <form className="flex flex-col justify-center items-center content-center gap-4">
          <InputForm
            title="How old are you?"
            inputValue={kidAge || ''}
            onChange={handleChange}
            placeholder="5"
            type="number"
            minLength={1}
            maxLength={2}
          />
        </form>
      </div>
    </>
  );
};
