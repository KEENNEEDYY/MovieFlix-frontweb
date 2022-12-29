import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
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
    });
  }, []);

  console.log(movies);
  
  return (
    <div className="theme-color-default">
      <h5>Tela de listagem de filmes</h5>
      <div className="list-container">
        { movies &&
          movies
          .sort((a, b) => a.id - b.id)
          .map( (item) => (
            <p>{`Acessar movies/${item.id}`}</p>
            )
          )
        }
      </div>
    </div>
  );
};

export default MovieCatalog;