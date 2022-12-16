import ReviewForm from 'components/ReviewForm';
import './styles.css';

const MovieDetails = () => {
    return(
        <div className="details-container theme-color-default">
            <h1>Tela de detalhes do filme id:</h1>
            <ReviewForm />

        </div>
    );
};

export default MovieDetails;