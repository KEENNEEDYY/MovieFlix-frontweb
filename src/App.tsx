import Navbar from 'components/Navbar';
import './assets/styles/custom.scss';
import './App.css';
import Home from 'pages/Home';
import Catalog from 'pages/Private/MovieCatalog';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';

function App() {
  return (
    <>
      <Navbar />
      <MovieDetails />
    </>
  );
}

export default App;
