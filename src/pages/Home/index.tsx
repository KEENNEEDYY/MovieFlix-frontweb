import { ReactComponent as MainImage } from 'assets/images/main-image.svg';

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
            <h5>LOGIN CARD</h5>
        </div>
      </div>
    </div>

  );
};

export default Home;
