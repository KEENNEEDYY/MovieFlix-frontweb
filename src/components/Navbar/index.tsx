import { Link } from 'react-router-dom';
import { removeAuthData } from 'util/storange';
import './styles.css';

const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  removeAuthData();
}

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div>
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
      </div>
      <div className="nav-button">
        <button className="btn nav-btn btn-primary">
          <a href="#logout"  onClick={handleLogoutClick} >Sair</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
