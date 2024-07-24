import { useState } from 'react';
import Image from 'next/image';
import { Filters, Toy } from '@/types/toy';

interface ListToyProps {
  kidName: string;
  toys: Toy[];
  filters: Filters;
  toysSelected: string[];
  onToysChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ListToy: React.FC<ListToyProps> = ({
  kidName,
  toys,
  filters,
  toysSelected,
  onToysChange,
}) => {
  const getToysFilteredByCategAndAge = () =>
    toys
      .filter((toy) => filters.categories.includes(toy.category))
      .filter((toy) => toy.age <= Number(filters.age))
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);

  const [toysList, setToysList] = useState(getToysFilteredByCategAndAge());
  return (
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <div>
        <h3>{kidName},</h3>
        <p>These are what we found for you!!</p>
        <p>Select the 3 toys you like the most. </p>
      </div>
      <div>
        <ul className="p-1 grid grid-cols-2 gap-2 md:grid-cols-3">
          {toysList.map((toy, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={toy.id}
                    onChange={onToysChange}
                    checked={toysSelected.map((toy) => toy.id).includes(toy.id)}
                  />
                  <Image
                    className="w-24 h-auto md:h-32"
                    src={toy.image}
                    width={80}
                    height={80}
                    alt="list toys"
                  />
                  <strong className="block text-sm font-bold">
                    {toy.model.length > 15
                      ? toy.model.slice(0, 15) + '...'
                      : toy.model}
                  </strong>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="listToyAgain">
          Any match?{' '}
          <button
            onClick={() => setToysList(getToysFilteredByCategAndAge())}
            className="tryAgainBtn"
          >
            Try again
          </button>
        </p>
      </div>
    </div>
  );
};
