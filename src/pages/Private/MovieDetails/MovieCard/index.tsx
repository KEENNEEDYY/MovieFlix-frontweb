import { Movie } from 'types/movie'
import './styles.css'

type Props = {
    movie : Movie;
}

const MovieCard = ( { movie } : Props) => {
    return(
        <>
            <div className="movie-details-card base-card">
                <div className="details-card-img">
                    <img src={movie.imgUrl} alt={movie.title} />
                </div>
                <div>
                    <h5> {movie.title} </h5>
                    <h4> {movie.year} </h4>
                    <p> {movie.subTitle} </p>
                    <div className="details-synopsis">
                        <p> {movie.synopsis} </p>  
                    </div>
                </div>
            </div>           
        </>
    );
};

export default MovieCard;