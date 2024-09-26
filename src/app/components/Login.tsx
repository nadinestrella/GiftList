import React, { ChangeEvent } from 'react';
import { InputForm } from './ui/InputForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../context/UseContext';
import { PreviousNextBtn } from './ui/NavigationBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface IFormInput {
  parentName: string;
  kidName: string;
  kidAge: number;
}

export const Login: React.FC<{
  goToNext: () => void;
}> = ({ goToNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { updateData } = useUser();

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    updateData(data);
    goToNext();
  };

  return (
    <div className="flex flex-col items-center justify-center  gap-4 md:pl-14">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          title="What is your name? 😀"
          placeholder="Nadine"
          {...register('parentName', {
            required: 'Parent name is required',
            minLength: { value: 3, message: 'Minimum length is 3 characters' },
            maxLength: {
              value: 15,
              message: 'Maximum length is 15 characters',
            },
          })}
        />

        <span
          className={`text-red-600 text-xs lg:text-right ${
            errors.parentName ? 'visible' : 'invisible'
          }`}
        >
          {errors.parentName?.message || ' '}
        </span>

        <InputForm
          title="What is your kid's name?👦 👧"
          placeholder=" Liam "
          {...register('kidName', {
            required: 'Kid name is required',
            minLength: { value: 3, message: 'Minimum length is 3 characters' },
            maxLength: {
              value: 15,
              message: 'Maximum length is 15 characters',
            },
          })}
        />
        <span
          className={`text-red-600 text-xs lg:text-right ${
            errors.kidName ? 'visible' : 'invisible'
          }`}
        >
          {errors.kidName?.message || ' '}
        </span>
        <InputForm
          title="How old are he/she?👦 👧"
          placeholder="5"
          {...register('kidAge', {
            required: "Kid's age is required",
            min: { value: 1, message: 'Age must be at least 1' },
            max: { value: 18, message: 'Age must be less than 18' },
            minLength: { value: 1, message: 'Minimun length is 1 character' },
            maxLength: { value: 2, message: 'Maximun length is 2 characters' },
          })}
          type="number"
        />
        <span
          className={`text-red-600 text-xs lg:text-right ${
            errors.kidAge ? 'visible' : 'invisible'
          }`}
        >
          {errors.kidAge?.message || ' '}
        </span>
        {/* 
        <button type="submit">Next </button> */}
        <PreviousNextBtn type="submit" icon={faArrowRight} />
      </form>
    </div>
  );
};
