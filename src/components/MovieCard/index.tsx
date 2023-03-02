import { Movie } from 'types/movie';
import './styles.css';

type Props = {
    movie: Movie;
}

const MovieCard = ( prop: Props) => {
    return(
        <div className="base-card movie-card">
            <img src={prop.movie.imgUrl} alt={prop.movie.title} />
            <div className="movie-card-text">
                <h5> {prop.movie.title} </h5>
                <h4> {prop.movie.year} </h4>
                <p> {prop.movie.subTitle} </p>
            </div>
            
        </div>
    )
}

export default MovieCard;