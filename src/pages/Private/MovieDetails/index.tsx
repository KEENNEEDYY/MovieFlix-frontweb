import  { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import './styles.css';
import {  requestBackend } from 'util/requests';
import { Review } from 'types/review';

type UrlParams = {
    movieId: string;
  }  

const MovieDetails = ( ) => {

    const { movieId } = useParams<UrlParams>();

    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>();

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            // url: `/movies/${movieId}`,
            url: `/movies/1`,
            withCredentials: true,
        }
        requestBackend(params)
        .then( response => {
            setMovie(response.data);
            setReviews(response.data.reviews);
        });
    },[movieId]);

    
    return(
        <div className="details-container">
            <h1>Tela de detalhes do filme id: {movie?.id}</h1>
            <ReviewForm />
            {reviews &&
                <ReviewListing reviews={reviews} />            
            }
        </div>
    );
};

export default MovieDetails;