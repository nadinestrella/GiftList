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
import { useEffect } from 'react';
import Layout from './Layout';

function App() {
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      SelectedToys(cleanData);
    });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/kidswelcome" element={<KidsWelcome />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/listtoy" element={<ListToy />} />
            <Route path="/selectedtoys" element={<SelectedToys />} />
            <Route path="/finallist" element={<FinalList />} />
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
