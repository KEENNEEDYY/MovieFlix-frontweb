import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter/MovieFilter';
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
  filterData: MovieFilterData;
}

const MovieCatalog = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();

  const [ controlComponentsData, setControlComponentsData ] = useState<ControlComponentsData>({
    activePage:0,
    filterData:{name:"", genre: null}
  });

  const handlePageChange = (pageNumber : number ) => {
    setControlComponentsData( {activePage: pageNumber, filterData: controlComponentsData.filterData } )
  }

  const hadleSubimitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data})
  }

  const getMovies = useCallback(
    (pageNumber: number) => {
      const params: AxiosParams = {
        method: 'GET',
        url: `${BASE_URL}/movies`,
        params:{
          page: controlComponentsData.activePage,
          size: 4,
          genreId: controlComponentsData.filterData.genre?.id
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
        <MovieFilter onSubmitFilter={hadleSubimitFilter}/>
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
        <Pagination forcePage={page?.number} onChange={handlePageChange} pageCount={ (page) ? page?.totalPages : 0 } range={3}/>
      </div>
    </div>
  );
};

export default MovieCatalog;