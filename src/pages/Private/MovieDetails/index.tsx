import  { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';
import {  requestBackend } from 'util/requests';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import MovieCard from './MovieCard';

type UrlParams = {
    movieId: string;
  }  

const MovieDetails = ( ) => {

    const { movieId } = useParams<UrlParams>();

    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}`,
            withCredentials: true,
        }
        requestBackend(params)
        .then( response => {
            setMovie(response.data);
            setReviews(response.data.reviews);
        });
    },[movieId]);

    const handleInsertReview = (review: Review) => {
        const clone = [...reviews];
        clone.push(review);
        setReviews(clone);       
    }
    
    return(
        <div className="details-container">

            {/* <h1>Tela de detalhes do filme id: {movie?.id}</h1> */
                movie &&
                <MovieCard movie={movie as Movie} />
            }
            

            { hasAnyRoles(['ROLE_MEMBER']) &&
                
                <>
                    <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />

                </>
                                
            }

            {reviews.length === 0 ? <div className="space-form-container"></div> :null }

            { reviews.length > 0 ? 
                <div className="details-container-reviews">
                    <ReviewListing reviews={reviews} /> 
                </div>
                : (null)
                           
            }
        </div>
    );
};

export default MovieDetails;