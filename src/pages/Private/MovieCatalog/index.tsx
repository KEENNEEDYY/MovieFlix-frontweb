import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
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
    });
  }, []);
  
  return (
    <div className="theme-color-default">
      <div className="movie-listing-top-container base-card">
        <p>MovieFilterData</p>
      </div>
      <div className="list-container row">
        { movies &&
          movies
          .sort((a, b) => a.id - b.id)
          .map( (item) => (
              <div className="movie-card-container col-12 col-sm-6 col-md-6 col-xl-3">
                <Link to={`/movies/${item.id}`} key={item.id}>
                  <MovieCard movie={item} key={item.id}/>
                </Link>
              </div>            
            )
          )
        }
      </div>
    </div>
  );
};

export default MovieCatalog;