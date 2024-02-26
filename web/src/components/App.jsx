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
import getDataFromApi from '../services/api';
import { useEffect, useState } from 'react';
import Layout from './Layout';

function App() {
  const [parentName, setparentName] = useState('');
  const [parentEmail, setparentEmail] = useState('');
  const [kidName, setKidName] = useState('');
  const [kidAge, setKidAge] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDataFromApi().then((category) => {
      setCategories(category);
    });
  }, []);

  const handleKidName = (value) => {
    setKidName(value);
  };

  const handleParentName = (value) => {
    setparentName(value);
  };

  const handleParentEmail = (value) => {
    setparentEmail(value);
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
                <KidsWelcome kidName={kidName} handleKidName={handleKidName} />
              }
            />
            <Route
              path="/categories"
              element={<Categories categories={categories} />}
            />
            <Route path="/listtoy" element={<ListToy kidName={kidName} />} />
            <Route
              path="/selectedtoys"
              element={<SelectedToys kidName={kidName} />}
            />
            <Route
              path="/finallist"
              element={<FinalList kidName={kidName} kidAge={kidAge} />}
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
