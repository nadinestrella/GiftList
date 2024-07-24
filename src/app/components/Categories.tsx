import React from 'react';

import Image from 'next/image';

interface CategoriesProp {
  uniqueCategories: string[];
  onCateoriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategories: string[];
}

export const Categories: React.FC<CategoriesProp> = ({
  uniqueCategories,
  onCateoriesChange,
  selectedCategories,
}) => {
  const renderCategories = uniqueCategories.map((category) => {
    return (
      <li
        key={category}
        className="flex align-middle justify-center w-24 h-24 border-2 border-background3 rounded-full overflow-hidden   "
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
            className=""
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
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <h3>What do you like to play with? </h3>
      <p>Choose as many options as you like</p>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {renderCategories}
      </ul>
    </div>
  );
};
