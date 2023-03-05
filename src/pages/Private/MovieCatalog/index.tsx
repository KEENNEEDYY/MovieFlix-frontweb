import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { BASE_URL, requestBackend } from 'util/requests';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
}

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();
  const [ controlComponentsData, setControlComponentsData ] = useState<ControlComponentsData>({
    activePage:0
  });

  const handlePageChange = (pageNumber : number ) => {
    setControlComponentsData( {activePage: pageNumber} )
  }

  const getMovies = useCallback(
    (pageNumber: number) => {
      const params: AxiosParams = {
        method: 'GET',
        url: `${BASE_URL}/movies`,
        params:{
          page: controlComponentsData.activePage,
          size: 4,
        },
        withCredentials: true,
      }
  
      requestBackend(params)
        .then( response => {
          setPage(response.data);
        });
    } 
    , [controlComponentsData])

  useEffect( () => {
    getMovies(0);
  }, [getMovies]);

  return (
    <div className="theme-color-default main-container">
      <div className="movie-listing-top-container base-card">
        <p>MovieFilterData</p>
      </div>
      <div className="list-container row">

      { page?.content
          .map( (movie) => (
              <div className="movie-card-container col-12 col-sm-6 col-md-6 col-xl-3" key={movie.id}>
                <Link to={`/movies/${movie.id}`} >
                  <MovieCard movie={movie} key={movie.id}/>
                </Link>
              </div>            
            )
          )
        }
      </div>
      <div className="row">
        <Pagination onChange={handlePageChange} pageCount={ (page) ? page.totalPages : 0 } range={3}/>
      </div>
    </div>
  );
};

export default MovieCatalog;