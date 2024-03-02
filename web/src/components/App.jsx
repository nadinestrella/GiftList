// Fichero src/components/App.jsxx
import { Route, Routes } from 'react-router-dom';
import '../scss/App.scss';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import KidsWelcome from './KidsWelcome';
import Categories from './Categories';
import ListToy from './ListToy';
import SelectedToys from './SelectedToys';
import FinalList from './FinalList';
import { getToysFromApi } from '../services/api';
import { useEffect, useState } from 'react';
import Layout from './Layout';

function App() {
  const [parentName, setparentName] = useState('');
  const [parentEmail, setparentEmail] = useState('');
  const [kidName, setKidName] = useState('');
  const [toys, setToys] = useState([]);

  // este estado nos sirve para filtrar en la api
  const [filters, setFilters] = useState({ age: '', categories: [] });

  //estado para juguetes seleccionados

  const [toysSelected, setToysSelected] = useState([]);

  //aqui me llegan los juguetes desde la api
  useEffect(() => {
    getToysFromApi().then((list) => {
      setToys(list);
    });
  }, []);

  // creamos un array con todas las categorias de los jugetes de la api
  const categories = toys.map((toy) => toy.category);
  // hacemos que sea una lista de categorias unicas
  const uniqueCategories = [...new Set(categories)];

  const handleKidName = (value) => {
    setKidName(value);
  };

  const handleParentName = (value) => {
    setparentName(value);
  };

  const handleParentEmail = (value) => {
    setparentEmail(value);
  };

  const onCateoriesChange = (event) => {
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

  const onToysChange = (event) => {
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

  const handleKidAge = (value) => {
    setFilters({ age: value, categories: filters.categories });
  };

  return (
    <>
      <Header />
      <main className="main">
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Login kidName={kidName} handleKidName={handleKidName} />
              }
            />
            <Route
              path="/kidswelcome"
              element={
                <KidsWelcome
                  kidName={kidName}
                  handleKidName={handleKidName}
                  handleKidAge={handleKidAge}
                  kidAge={filters.age}
                />
              }
            />
            <Route
              path="/categories"
              element={
                <Categories
                  uniqueCategories={uniqueCategories}
                  onCateoriesChange={onCateoriesChange}
                  selectedCategories={filters.categories}
                />
              }
            />
            <Route
              path="/listtoy"
              element={
                <ListToy
                  toys={toys}
                  kidName={kidName}
                  filters={filters}
                  toysSelected={toysSelected}
                  onToysChange={onToysChange}
                />
              }
            />
            <Route
              path="/selectedtoys"
              element={
                <SelectedToys kidName={kidName} toysSelected={toysSelected} />
              }
            />
            <Route
              path="/finallist"
              element={
                <FinalList
                  kidName={kidName}
                  kidAge={filters.age}
                  toysSelected={toysSelected}
                />
              }
            />
          </Routes>
        </Layout>
      </main>

      <Footer />
    </>
  );
}

export default App;

//orden
// 1login
//2kidswelcome
//3categories
//4listtoy
//5selectedtoys
//6finallist
