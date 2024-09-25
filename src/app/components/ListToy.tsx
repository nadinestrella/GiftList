import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Filters, Toy } from '@/types/toy';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '../context/UseContext';
import toys from '../toys.json';

interface IFormInput {
  listToy: string[];
}

export const ListToy: React.FC<{
  goToNext: () => void;
  goToPrevious: () => void;
}> = ({ goToNext, goToPrevious }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const { updateData, data } = useUser();
  const form = watch();

  const [toysList, setToysList] = useState<Toy[]>(toys);
  const [toysSelected, setToysSelected] = useState<Toy[]>([]);

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    updateData(data);
    // goToNext();
  };

  const filteredToys = toys
    .filter((toy) => data.categories?.includes(toy.category))
    .filter((toy) => toy.age <= Number(data.kidAge));

  // const generateNewToysList = useCallback(() => {
  //   //filtra por cat y edad
  //   const filteredToys = toys
  //     .filter((toy) => filters.categories.includes(toy.category))
  //     .filter((toy) => toy.age <= Number(filters.age));

  //   //inicia una nueva lista de juguetes con los ya seleccionados
  //   const newToysList = [...toysSelected];
  //   // agrega juguetes adicionales aleatorios
  //   const additionalToys = filteredToys
  //     .filter(
  //       (toy) => !toysSelected.some((selectedToy) => selectedToy.id === toy.id)
  //     )
  //     .sort(() => Math.random() - 0.5)
  //     .slice(0, 6 - toysSelected.length);
  //   //actualiza el estado con la nueva lista de juguetes
  //   setToysList([...newToysList, ...additionalToys]);
  // }, [toys, filters, toysSelected]);
  // //se llama automaticamente cuando cambian los filtros, los juguetes disponibles o los juguetes seleccionados
  // useEffect(() => {
  //   generateNewToysList();
  // }, [generateNewToysList]);

  // const onToysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const toyClicked = toys.find(
  //     (toy) => toy.id === Number(event.target.value)
  //   );

  //   const toyClickedChecked = event.target.checked;

  //   const currentToys = [...toysSelected];

  //   if (toyClickedChecked) {
  //     currentToys.push(toyClicked as Toy);
  //   } else {
  //     const toyClickedIndex = currentToys.findIndex(
  //       (toy) => toy.id === (toyClicked as Toy).id
  //     );

  //     currentToys.splice(toyClickedIndex, 1);
  //   }

  //   setToysSelected(currentToys);
  // };

  return (
    <div className="flex flex-col justify-center items-center content-center gap-4">
      <div className="md:flex md:flex-col md:items-start">
        <p className="font-semibold pb-2">kidName,</p>
        <p>These are what we found for you!!</p>
        <p>Select the toys you like the most: </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="p-1 grid grid-cols-2 gap-9 md:grid-cols-3 md:gap-12">
          {filteredToys.map((toy, index) => {
            return (
              <li
                key={index}
                className="flex flex-col align-middle justify-center"
              >
                <label
                  className={`w-24 h-24 md:w-32 md:h-32 border-2 border-background3 rounded-full overflow-hidden ${
                    filteredToys.map((toy) => toy.id).includes(toy.id)
                      ? 'border-background3 border-8'
                      : 'border-background3'
                  }`}
                >
                  <input
                    type="checkbox"
                    value={toy.id}
                    // onChange={onToysChange}
                    {...register('listToy', {
                      required:
                        'Please select at least one toy or click Try again',
                    })}
                    // checked={toysSelected.map((toy) => toy.id).includes(toy.id)}
                    className="hidden"
                  />
                  <Image
                    src={toy.image}
                    width={100}
                    height={100}
                    alt={`toy" ${toy.brand}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </label>
                <p className="text-sm font-bold hidden md:block">
                  {toy.model.length > 15
                    ? toy.model.slice(0, 15) + '...'
                    : toy.model}
                </p>
              </li>
            );
          })}
        </ul>
        <div>
          <button onClick={goToPrevious}>Previous</button>
          <button type="submit">Next </button>
        </div>
      </form>
      {/* <div>
        <p className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          Any match?{' '}
          <button
            onClick={generateNewToysList}
            className="w-28 h-6 bg-background3 text-white border-0 rounded-full hover:bg-nextBtn text-sm "
          >
            Try again 🎲
          </button>
        </p>
      </div> */}
    </div>
  );
};
