'use client';
import { useState } from 'react';

import { Login } from './components/Login';
import { Toy, Filters } from '@/types/toy';
import { KidsWelcome } from './components/KidsWelcome';
import { Categories } from './components/Categories';
import { ListToy } from './components/ListToy';
import { SelectedToys } from './components/SelectedToys';
import { FinalList } from './components/FinalList';

export default function Home() {
  const [parentName, setparentName] = useState<string>('');
  const [parentEmail, setparentEmail] = useState<string>('');
  const [kidName, setKidName] = useState<string>('');
  const [toys, setToys] = useState<Toy[]>([]);

  // este estado nos sirve para filtrar en la api
  const [filters, setFilters] = useState<Filters>({ age: '', categories: [] });

  //estado para juguetes seleccionados

  const [toysSelected, setToysSelected] = useState<Toy[]>([]);

  // //aqui me llegan los juguetes desde la api
  // useEffect(() => {
  //   getToysFromApi().then((list) => {
  //     setToys(list);
  //   });
  // }, []);

  // creamos un array con todas las categorias de los jugetes de la api
  const categories = toys.map((toy) => toy.category);
  // hacemos que sea una lista de categorias unicas
  const uniqueCategories = [...new Set(categories)];

  const handleKidName = (value: string) => {
    setKidName(value);
  };

  const handleParentName = (value: string) => {
    setparentName(value);
  };

  const handleParentEmail = (value: string) => {
    setparentEmail(value);
  };

  const onCateoriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // cogemos el valor del checkbox (category name)
    const categoryClicked = event.target.value;
    // cogemos si el checkbox esta checked (clickado)
    const categoryClickedChecked = event.target.checked;

    const currentCategories = filters.categories;

    // si la categoria esta checked
    if (categoryClickedChecked) {
      // añadimos al array
      currentCategories.push(categoryClicked);
    } else {
      // si no esta checked, buscamos el index de la categoria
      const categoryClickedIndex = currentCategories.findIndex(
        (category) => category === categoryClicked
      );
      // la eliminamos del array
      currentCategories.splice(categoryClickedIndex, 1);
    }
    // actualizamos el estado
    setFilters({ age: filters.age, categories: currentCategories });
  };

  const onToysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // cogemos el valor del checkbox (category name)
    const toyClicked = toys.find(
      (toy) => toy.id === Number(event.target.value)
    );
    // cogemos si el checkbox esta checked (clickado)
    const toyClickedChecked = event.target.checked;

    const currentToys = [...toysSelected];

    // si la categoria esta checked
    if (toyClickedChecked) {
      // añadimos al array
      currentToys.push(toyClicked);
    } else {
      // si no esta checked, buscamos el index de la categoria
      const toyClickedIndex = currentToys.findIndex(
        (toy) => toy.id === toyClicked.id
      );
      // la eliminamos del array
      currentToys.splice(toyClickedIndex, 1);
    }

    setToysSelected(currentToys);
  };

  const handleKidAge = (value: string) => {
    setFilters({ age: value, categories: filters.categories });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login kidName={kidName} handleKidName={handleKidName} />

      <KidsWelcome
        kidName={kidName}
        handleKidName={handleKidName}
        handleKidAge={handleKidAge}
        kidAge={filters.age}
      />

      <Categories
        uniqueCategories={uniqueCategories}
        onCateoriesChange={onCateoriesChange}
        selectedCategories={filters.categories}
      />

      <ListToy
        toys={toys}
        kidName={kidName}
        filters={filters}
        toysSelected={toysSelected}
        onToysChange={onToysChange}
      />

      <SelectedToys kidName={kidName} toysSelected={toysSelected} />

      <FinalList
        kidName={kidName}
        kidAge={filters.age}
        toysSelected={toysSelected}
      />
    </main>
  );
}

//orden
// 1login
//2kidswelcome
//3categories
//4listtoy
//5selectedtoys
//6finallist
