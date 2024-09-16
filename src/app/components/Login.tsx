import React, { ChangeEvent } from 'react';
import { InputForm } from './ui/InputForm';

interface LoginProps {
  kidName: string;
  handleKidName: (value: string) => void;
  handleParentName: (value: string) => void;
  parentName: string;
  handleParentEmail?: (value: string) => void;
  kidAge: number;
  handleKidAge: (value: string) => void;
}

export const Login: React.FC<LoginProps> = ({
  kidName,
  handleKidName,
  parentName,
  handleParentName,
  kidAge,
  handleKidAge,
}) => {
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    //coge el valor del input
    handleKidAge(ev.target.value);
  };

  return (
    <div className="flex flex-col  justify-center  gap-4 md:pl-14 ">
      <form className="flex flex-col gap-4  ">
        <InputForm
          title="What is your name? 😀"
          inputValue={parentName || ''}
          onChange={(ev) => {
            handleParentName(ev.target.value);
          }}
          placeholder="Nadine"
          required={true}
          maxLength={15}
        />

        <InputForm
          title="What is your kid's name?👦 👧"
          placeholder=" Liam "
          inputValue={kidName || ''}
          required={true}
          maxLength={15}
          onChange={(ev) => {
            handleKidName(ev.target.value);
          }}
        />
        <InputForm
          title="How old are he/she?👦 👧"
          placeholder="5"
          inputValue={kidAge || ''}
          onChange={handleChange}
          required={true}
          type="number"
          minLength={1}
          maxLength={2}
        />
      </form>
    </div>
  );
};
