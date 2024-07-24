import React from 'react';

import Image from 'next/image';

interface CategoriesProp {
  uniqueCategories: string[];
  onCateoriesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategories: string[];
}

// const getImageUrl = (path: string): string => {
//   return `/images${path}`;
// };

export const Categories: React.FC<CategoriesProp> = ({
  uniqueCategories,
  onCateoriesChange,
  selectedCategories,
}) => {
  const renderCategories = uniqueCategories.map((category) => {
    return (
      <li key={category} className="containerCategories__li">
        <input
          className="categories__input"
          onChange={onCateoriesChange}
          type="checkbox"
          id={category}
          value={category}
          checked={selectedCategories.includes(category)}
        />
        <label className="categories__checkbox" htmlFor={category}>
          {/* <Image
            className="categories__checkbox__image"
            src={getImageUrl(`/categories/${category}.png`)}
            alt="categories"
          /> */}
        </label>
      </li>
    );
  });
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <h3>What do you like to play with? </h3>
      <p>Choose as many options as you like</p>
      <ul className="grid grid-cols-2 gap-10">{renderCategories}</ul>
    </div>
  );
};
