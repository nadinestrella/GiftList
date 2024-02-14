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
      <Login />
      <KidsWelcome />
      <Categories />
      <ListToy />
      <SelectedToys />
      <FinalList />

      <Footer />
    </>
  );
}

export default App;

{
  /* <Routes>
<Route>
  <Login />
</Route>
</Routes> */
}
