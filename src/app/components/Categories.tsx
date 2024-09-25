import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../context/UseContext';
import toys from '../toys.json';
import Image from 'next/image';

interface IFormInput {
  categories: string[];
}

export const Categories: React.FC<{
  goToNext: () => void;
  goToPrevious: () => void;
}> = ({ goToNext, goToPrevious }) => {
  const { updateData, data } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>({
    defaultValues: {
      categories: data.categories,
    },
  });

  const form = watch();

  const categories = toys.map((toy) => toy.category);
  const uniqueCategories = [...new Set(categories)];

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    updateData(data);
    goToNext();
  };

  const renderCategories = uniqueCategories.map((category) => {
    return (
      <li
        key={category}
        className="flex align-middle justify-center w-24 h-24 border-2 border-background3 rounded-full overflow-hidden "
      >
        <input
          type="checkbox"
          id={category}
          value={category}
          className="hidden"
          {...register('categories', {
            required: 'Please select at least one category',
          })}
        />
        <label
          className={`flex align-middle justify-center ${
            form.categories?.includes(category) ? 'grayscale-0' : 'grayscale'
          }`}
          htmlFor={category}
        >
          <Image
            src={`/categories/${category}.png`}
            alt="categories"
            width={100}
            height={100}
          />
        </label>
      </li>
    );
  });

  return (
    <div className="flex flex-col justify-center content-center gap-3">
      <div className="ml-5 mb-4 md:flex md:flex-col md:items-center">
        <p className="pb-2">Hi {data.kidName}</p>
        <h3>What do you like to play with? </h3>
        <p>Choose as many options as you like:</p>
      </div>
      <span
        className={`text-red-600 text-xs lg:text-right ${
          errors.categories ? 'visible' : 'invisible'
        }`}
      >
        {errors.categories?.message || ' '}
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center md:ml-9 ">
          {renderCategories}
        </ul>
        <div>
          <button onClick={goToPrevious}>Previous</button>
          <button type="submit">Next </button>
        </div>
      </form>
    </div>
  );
};
