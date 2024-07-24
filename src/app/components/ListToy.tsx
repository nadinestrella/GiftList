import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Filters, Toy } from '@/types/toy';

interface ListToyProps {
  kidName: string;
  toys: Toy[];
  filters: Filters;
  toysSelected: Toy[];
  onToysChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ListToy: React.FC<ListToyProps> = ({
  kidName,
  toys,
  filters,
  toysSelected,
  onToysChange,
}) => {
  const [toysList, setToysList] = useState<Toy[]>(toys);

  useEffect(() => {
    setToysList(
      toys
        .filter((toy) => filters.categories.includes(toy.category))
        .filter((toy) => toy.age <= Number(filters.age))
        .sort(() => Math.random() - 0.5)
        .slice(0, 6)
    );
  }, [filters, toys]);

  return (
    <div className="flex flex-col justify-center items-center content-center gap-4 pb-5">
      <div>
        <h3>{kidName},</h3>
        <p>These are what we found for you!!</p>
        <p>Select the {toysList.length} toys you like the most. </p>
      </div>
      <div>
        <ul className="p-1 grid grid-cols-2 gap-9 md:grid-cols-3">
          {toysList.map((toy, index) => {
            return (
              <li
                key={index}
                className="flex align-middle justify-center w-24 h-24"
              >
                <label
                  className={`w-28 h-auto md:h-32 border-2 border-background3 rounded-full overflow-hidden  hover:border-pink ${
                    toysSelected.map((toy) => toy.id).includes(toy.id)
                      ? 'border-pink border-8'
                      : 'border-background3'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={toy.id}
                    onChange={onToysChange}
                    checked={toysSelected.map((toy) => toy.id).includes(toy.id)}
                    className="hidden"
                  />
                  <Image
                    src={toy.image}
                    width={100}
                    height={100}
                    alt="list toys"
                  />

                  <p className="text-sm font-bold hidden md:block">
                    {toy.model.length > 15
                      ? toy.model.slice(0, 15) + '...'
                      : toy.model}
                  </p>
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
