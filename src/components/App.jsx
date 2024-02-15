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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/KidsWelcome" element={<KidsWelcome />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/ListToy" element={<ListToy />} />
        <Route path="/SelectedToys" element={<SelectedToys />} />
        <Route path="/FinalList" element={<FinalList />} />
      </Routes>

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
