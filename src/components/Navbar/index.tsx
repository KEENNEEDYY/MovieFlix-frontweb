import Button from 'components/Button';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <div>
        <a href="/">
          <h4>MovieFlix</h4>
        </a>
      </div>
      <Button />
    </nav>
  );
};

export default Navbar;
