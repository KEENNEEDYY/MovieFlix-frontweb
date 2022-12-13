import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div>
        <a href="/">
          <h4>MovieFlix</h4>
        </a>
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
