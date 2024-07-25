import React from 'react';
import { InputForm } from './ui/InputForm';

interface LoginProps {
  kidName: string;
  handleKidName: (value: string) => void;
  handleParentName: (value: string) => void;
  parentEmail: string;
  handleParentEmail: (value: string) => void;
}

export const Login: React.FC<LoginProps> = ({
  kidName,
  handleKidName,
  parentName,
  handleParentName,
  handleParentEmail,
}) => {
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <h3 className="text-lg pt-3">Welcome to My Gift List</h3>
      <form className="flex flex-col justify-center items-center content-center gap-4">
        <InputForm
          title="What is your name?"
          inputValue={parentName || ''}
          onChange={(ev) => {
            handleParentName(ev.target.value);
          }}
          placeholder="Nadine"
          required={true}
          maxLength={15}
        />

        <InputForm
          title="What is your son's name?"
          placeholder=" Liam "
          inputValue={kidName || ''}
          required={true}
          maxLength={15}
          onChange={(ev) => {
            handleKidName(ev.target.value);
          }}

          // input={{
          //   onChange: (ev) => {
          //     handleKidName(ev.target.value);
          //   },
          // }}
        />
        {/* <label>What is your son is name? </label> */}
        {/* <input
          type="text"
          placeholder=" Liam "
          onChange={(ev) => {
            handleKidName(ev.target.value);
          }} */}
        {/* /> */}
      </form>
    </div>
  );
};
