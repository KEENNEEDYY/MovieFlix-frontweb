import {ReactComponent as StarImage} from 'assets/images/start.svg';
import { Review } from 'types/review';
import './styles.css';

type Props = {
    review: Review;
}

const ReviewCard = (props : Props ) => {
    return(
        <div className="review-card-container">
            <div className="star-container">
                <StarImage />
                <h1 className="review-card-name">{props.review.user.name}</h1>
            </div>
            <div className="review-description">
                <p className="review-description-text">
                    {props.review.text}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;