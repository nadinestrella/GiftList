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
        <Route
          path="/"
          element={
            <Login
              path="/Login"
              element={
                <KidsWelcome
                  path="/KidsWelcome"
                  element={
                    <Categories
                      path="Categories"
                      element={
                        <ListToy
                          path="/ListToy"
                          element={
                            <SelectedToys
                              path="/FinalList"
                              element={<FinalList />}
                            />
                          }
                        />
                      }
                    />
                  }
                />
              }
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

{
}
