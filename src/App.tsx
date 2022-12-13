import Navbar from 'components/Navbar';
import './assets/styles/custom.scss';
import './App.css';
import Home from 'pages/Home';
import Catalog from 'pages/Private/MovieCatalog';
import MovieCatalog from 'pages/Private/MovieCatalog';

function App() {
  return (
    <>
      <Navbar />
      <MovieCatalog />
    </>
  );
}

export default App;
