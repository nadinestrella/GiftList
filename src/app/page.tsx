'use client';
import { useState } from 'react';

import { Toy, Filters } from '@/types/toy';
import { Login } from './components/Login';
import { Categories } from './components/Categories';
import { ListToy } from './components/ListToy';
import { SelectedToys } from './components/SelectedToys';
import { FinalList } from './components/FinalList';
import toys from './toys.json';
import objectToExport from './services/localStorage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

export default function Home() {
  const [parentName, setparentName] = useState<string>('');
  const [kidName, setKidName] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({ age: '', categories: [] });
  const [toysSelected, setToysSelected] = useState<Toy[]>([]);

  const categories = toys.map((toy) => toy.category);
  const uniqueCategories = [...new Set(categories)];

  const handleKidName = (value: string) => {
    setKidName(value);
    objectToExport.setInLocalStorage('kidName', value);
  };

  const handleParentName = (value: string) => {
    setparentName(value);
    objectToExport.setInLocalStorage('parentName', value);
  };

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

  const onToysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const toyClicked = toys.find(
      (toy) => toy.id === Number(event.target.value)
    );

    const toyClickedChecked = event.target.checked;

    const currentToys = [...toysSelected];

    if (toyClickedChecked) {
      currentToys.push(toyClicked as Toy);
    } else {
      const toyClickedIndex = currentToys.findIndex(
        (toy) => toy.id === (toyClicked as Toy).id
      );

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
      className=" bg-background2 flex flex-col min-h-96 w-64 md:w-3/4 lg:w-tablet rounded-lg m-auto p-2  "
      {...settings}
    >
      <div>
        <Login
          kidName={kidName}
          handleKidName={handleKidName}
          handleParentName={handleParentName}
          parentName={parentName}
          kidAge={Number(filters.age)}
          handleKidAge={handleKidAge}
        />
      </div>

      <div>
        <Categories
          uniqueCategories={uniqueCategories}
          onCateoriesChange={onCateoriesChange}
          selectedCategories={filters.categories}
          kidName={kidName}
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
          kidAge={Number(filters.age)}
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
