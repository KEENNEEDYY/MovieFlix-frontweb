import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'util/requests';
import './styles.css';

const MovieCatalog = () => {

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(()=>{
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/movies",
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setMovies(response.data.content);
      console.log(response.data.content);
    });
  }, []);
  
  return (
    <div className="theme-color-default">
      <h5>Tela de listagem de filmes</h5>
      <div className="list-container">
        { 
          movies
          .sort((a, b) => a.id - b.id)
          .map( (item) => (
            <Link to={`/movies/${item.id}`}>
              <p>{`Acessar movies/${item.id}`}</p>
            </Link>
            )
          )
        }
      </div>
    </div>
  );
};

export default MovieCatalog;