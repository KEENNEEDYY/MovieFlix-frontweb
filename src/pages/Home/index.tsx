import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from './Login';

import './styles.css'

const Home = () => {
  return (

    <div className="container theme-color-default">
      <div className="home-container">
        <div className="text-container">
          <h5>Avalie Filmes</h5>
          <p>Diga o que você achou de seu filme favorito</p>
          <MainImage />
        </div>
        <div className="login-container">
            <Login />
        </div>
      </div>
    </div>

  );
};

export default Home;
