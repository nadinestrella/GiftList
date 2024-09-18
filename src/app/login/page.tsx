'use client';
import { useState } from 'react';

import { Toy, Filters } from '@/types/toy';
import { Login } from '../components/Login';
import { Categories } from '../components/Categories';
import { ListToy } from '../components/ListToy';
import { SelectedToys } from '../components/SelectedToys';
import { FinalList } from '../components/FinalList';
import toys from '../toys.json';
import objectToExport from '../services/localStorage';

import { StepperUI } from '../components/StepperUI';
import { StepNavigation } from '../components/ui/StepNavigation';
import { useSteps } from '@chakra-ui/stepper';
import { PageLayout } from '../components/PageLayout';
import { UserProvider } from '../context/UseContext';

export default function Home() {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: 4,
  });

  // const [parentName, setparentName] = useState<string>('');
  // const [kidName, setKidName] = useState<string>('');
  // const [filters, setFilters] = useState<Filters>({ age: '', categories: [] });
  const [toysSelected, setToysSelected] = useState<Toy[]>([]);

  // const categories = toys.map((toy) => toy.category);
  // const uniqueCategories = [...new Set(categories)];

  // const handleKidName = (value: string) => {
  //   setKidName(value);
  //   objectToExport.setInLocalStorage('kidName', value);
  // };

  // const handleParentName = (value: string) => {
  //   setparentName(value);
  //   objectToExport.setInLocalStorage('parentName', value);
  // };

  // const onCateoriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const categoryClicked = event.target.value;
  //   const categoryClickedChecked = event.target.checked;
  //   const currentCategories = filters.categories;

  //   if (categoryClickedChecked) {
  //     currentCategories.push(categoryClicked);
  //   } else {
  //     const categoryClickedIndex = currentCategories.findIndex(
  //       (category) => category === categoryClicked
  //     );
  //     currentCategories.splice(categoryClickedIndex, 1);
  //   }
  //   setFilters({ age: filters.age, categories: currentCategories });
  // };

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

  // const handleKidAge = (value: string) => {
  //   setFilters({ age: value, categories: filters.categories });
  // };

  return (
    <PageLayout
      sidebar={<StepperUI step={activeStep} />}
      content={
        <UserProvider>
          <div className="pt-11">
            {activeStep === 0 ? <Login goToNext={goToNext} /> : null}
            {activeStep === 1 ? (
              <Categories
                goToNext={goToNext}
                goToPrevious={goToPrevious}
                // uniqueCategories={uniqueCategories}
                // onCateoriesChange={onCateoriesChange}
                // selectedCategories={filters.categories}
                // kidName={kidName}
              />
            ) : null}
            {activeStep === 2 ? (
              <ListToy
                toys={toys as Toy[]}
                kidName={kidName}
                filters={filters}
                toysSelected={toysSelected}
                onToysChange={onToysChange}
              />
            ) : null}
            {activeStep === 3 ? (
              <SelectedToys kidName={kidName} toysSelected={toysSelected} />
            ) : null}
            {activeStep === 4 ? (
              <FinalList
                kidName={kidName}
                parentName={parentName}
                kidAge={Number(filters.age)}
                toysSelected={toysSelected}
              />
            ) : null}
          </div>
        </UserProvider>
      }
      navigation={
        <StepNavigation
          step={activeStep}
          goToNext={goToNext}
          goToPrevious={goToPrevious}
        />
      }
    />
  );
}

// //orden
// // 1login
// //2categories
// //3listtoy
// //4selectedtoys
// //5finallist
