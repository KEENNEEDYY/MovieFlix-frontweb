import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, TokenData } from 'util/auth';
import { removeAuthData } from 'util/storange';
import {useState, useEffect} from 'react';
import './styles.css';
import history from 'util/history';

type AuthData = {
  authenticated: boolean,
  tokenData?: TokenData
}

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>( { authenticated: false } );

  useEffect(() => {
    if(isAuthenticated()){
      setAuthData({
        authenticated: true,
        tokenData: getTokenData()
      });
    }else{
      setAuthData({
        authenticated: false
      });
    }
  },[]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
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
        { authData.authenticated ? (
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
