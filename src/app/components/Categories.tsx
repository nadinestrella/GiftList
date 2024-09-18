import React from 'react';
import { InputForm } from './ui/InputForm';
import { useForm, SubmitHandler } from 'react-hook-form';

import Image from 'next/image';

interface CategoriesProps {
  uniqueCategories: string[];
  onCateoriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategories: string[];
  kidName: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  uniqueCategories,
  onCateoriesChange,
  selectedCategories,
  kidName,
}) => {
  const renderCategories = uniqueCategories.map((category) => {
    return (
      <li
        key={category}
        className="flex align-middle justify-center w-24 h-24 border-2 border-background3 rounded-full overflow-hidden "
      >
        <input
          className="hidden"
          onChange={onCateoriesChange}
          type="checkbox"
          id={category}
          value={category}
          checked={selectedCategories.includes(category)}
        />
        <label
          className={`flex align-middle justify-center ${
            selectedCategories.includes(category) ? 'grayscale-0' : 'grayscale'
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
        <p className="pb-2">Hi {kidName}</p>
        <h3>What do you like to play with? </h3>
        <p>Choose as many options as you like:</p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center md:ml-9 ">
        {renderCategories}
      </ul>
    </div>
  );
};
