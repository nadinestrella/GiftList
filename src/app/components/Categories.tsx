import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useUser } from '../context/UseContext';
import toys from '../toys.json';
import { Toy, Filters } from '@/types/toy';

import Image from 'next/image';

// interface CategoriesProps {
//   uniqueCategories: string[];
//   onCateoriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   selectedCategories: string[];
//   kidName: string;
// }

interface IFormInput {
  categories: string[];
}
interface Filters {
  age: string;
  categories: string[];
}

export const Categories: React.FC<{
  goToNext: () => void;
  goToPrevious: () => void;
}> = ({ goToNext, goToPrevious }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { updateData } = useUser();
  const [filters, setFilters] = useState<Filters>({ age: '', categories: [] });
  const categories = toys.map((toy) => toy.category);
  const uniqueCategories = [...new Set(categories)];

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateData(data);
    // goToNext();
  };

  const selectedCategories = filters.categories;
  const onCateoriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryClicked = event.target.value;
    const categoryClickedChecked = event.target.checked;
    const currentCategories = filters.categories;

    if (categoryClickedChecked) {
      currentCategories.push(categoryClicked);
    } else {
      const categoryClickedIndex = currentCategories.findIndex(
        (category) => category === categoryClicked
      );
      currentCategories.splice(categoryClickedIndex, 1);
    }
    setFilters({ age: filters.age, categories: currentCategories });
  };

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
          // checked={selectedCategories.includes(category)}
          {...register('categories')}
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center content-center gap-3">
        <div className="ml-5 mb-4 md:flex md:flex-col md:items-center">
          <p className="pb-2">Hi </p>
          <h3>What do you like to play with? </h3>
          <p>Choose as many options as you like:</p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center md:ml-9 ">
          {renderCategories}
        </ul>
      </div>
      <div>
        <button onClick={goToPrevious}>Previous</button>
        <button type="submit">Next </button>
      </div>
    </form>
  );
};
