'use client';
import { useState, useEffect } from 'react';

import { Toy, Filters } from '@/types/toy';
import { Login } from './components/Login';
import { KidsWelcome } from './components/KidsWelcome';
import { Categories } from './components/Categories';
import { ListToy } from './components/ListToy';
import { SelectedToys } from './components/SelectedToys';
import { FinalList } from './components/FinalList';
import toys from './toys.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

export default function Home() {
  const [parentName, setparentName] = useState<string>('');
  const [parentEmail, setparentEmail] = useState<string>('');
  const [kidName, setKidName] = useState<string>('');
  // const [toys, setToys] = useState<Toy[]>([]);

  // este estado nos sirve para filtrar en la api
  const [filters, setFilters] = useState<Filters>({ age: '', categories: [] });

  //estado para juguetes seleccionados
  const [toysSelected, setToysSelected] = useState<Toy[]>([]);

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
      currentToys.push(toyClicked as Toy);
    } else {
      // si no esta checked, buscamos el index de la categoria
      const toyClickedIndex = currentToys.findIndex(
        (toy) => toy.id === (toyClicked as Toy).id
      );
      // la eliminamos del array
      currentToys.splice(toyClickedIndex, 1);
    }

    setToysSelected(currentToys);
  };

  const handleKidAge = (value: string) => {
    setFilters({ age: value, categories: filters.categories });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      className=" bg-background2 flex flex-col min-h-96 w-80 md:w-tablet rounded-lg m-auto  "
      {...settings}
    >
      <div>
        <Login
          kidName={kidName}
          handleKidName={handleKidName}
          handleParentName={handleParentName}
          parentName={parentName}
          parentEmail={parentEmail}
          handleParentEmail={handleParentEmail}
        />
      </div>
      <div>
        <KidsWelcome
          kidName={kidName}
          handleKidName={handleKidName}
          handleKidAge={handleKidAge}
          kidAge={filters.age}
        />
      </div>
      <div>
        <Categories
          uniqueCategories={uniqueCategories}
          onCateoriesChange={onCateoriesChange}
          selectedCategories={filters.categories}
        />
      </div>
      <div>
        <ListToy
          toys={toys as Toy[]}
          kidName={kidName}
          filters={filters}
          toysSelected={toysSelected}
          onToysChange={onToysChange}
        />
      </div>
      <div>
        <SelectedToys kidName={kidName} toysSelected={toysSelected} />
      </div>
      <div>
        <FinalList
          kidName={kidName}
          parentName={parentName}
          kidAge={filters.age}
          toysSelected={toysSelected}
        />
      </div>
    </Slider>
  );
}

//orden
// 1login
//2kidswelcome
//3categories
//4listtoy
//5selectedtoys
//6finallist
