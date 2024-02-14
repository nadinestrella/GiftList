// Fichero src/components/App.jsxx
import { Route, Routes } from 'react-router-dom';
import '../scss/App.scss';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import KidsWelcome from './KidsWelcome';

function App() {
  return (
    <>
      <Header />
      <Login />
      <KidsWelcome />

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
