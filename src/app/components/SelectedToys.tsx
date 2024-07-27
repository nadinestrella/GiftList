import React from 'react';
import Image from 'next/image';
import { Toy } from '@/types/toy';

interface SelectedToysProps {
  kidName: string;
  toysSelected: Toy[];
}

export const SelectedToys: React.FC<SelectedToysProps> = ({
  kidName,
  toysSelected,
}) => {
  return (
    <div className="flex flex-col  items-center content-center gap-4">
      <div>
        <p className="font-semibold pb-2">Congratulations {kidName}!! </p>
        <p> You have choosen these {toysSelected.length} toys!!</p>
      </div>
      <ul className="grid grid-col md:grid-cols-3 justify-center items-center content-center gap-4">
        {toysSelected.map((toy, index) => {
          return (
            <li key={index} className="w-28 h-28 md:w-32 md:h-32 mb-14 ">
              <a href={toy.link} target="_blank">
                <Image
                  className="w-full h-full object-cover rounded-full border-2 border-background3 overflow-hidden hover:scale-125"
                  src={toy.image}
                  width={100}
                  height={100}
                  alt={`toy" ${toy.brand}`}
                />
              </a>
              <strong className="hidden md:block text-sm">
                {toy.model.length > 15
                  ? toy.model.slice(0, 40) + '...'
                  : toy.model}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
