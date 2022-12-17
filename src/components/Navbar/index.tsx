import { Link } from 'react-router-dom';
import './styles.css';

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
          <p>Sair</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
