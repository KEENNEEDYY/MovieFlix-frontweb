import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';

const MovieDetails = () => {
    return(
        <div className="details-container">
            <h1>Tela de detalhes do filme id: 1</h1>
            <ReviewForm />
            <ReviewListing />
        </div>
    );
};

export default MovieDetails;