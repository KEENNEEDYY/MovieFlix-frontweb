import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storange';
import { useEffect , useContext} from 'react';
import {AuthContext} from 'AuthContext';
import './styles.css';
import history from 'util/history';

const Navbar = () => {

  const {authContextData, setAuthContextData} = useContext(AuthContext);

  useEffect(() => {
    if(isAuthenticated()){
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }else{
      setAuthContextData({
        authenticated: false
      });
    }
  },[setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/");
  }

  return (
    <nav className="navbar bg-primary main-nav">
      <div>
        <Link to="/">
          <h4>MovieFlix</h4>
        </Link>
      </div>

      <div>
        { authContextData.authenticated ? (
          <> 
            <div className="nav-button">
              <button className="btn nav-btn btn-primary">
                <a href="#logout"  onClick={handleLogoutClick} >Sair</a>
              </button>
            </div>   
          </> ) : (
            <></>
          )
          }
      </div>

    </nav>
  );
};

export default Navbar;
