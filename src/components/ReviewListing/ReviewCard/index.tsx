import {ReactComponent as StarImage} from 'assets/images/start.svg';

import './styles.css';

const ReviewCard = () => {
    return(
        <div className="review-card-container">
            <div className="star-container">
                <StarImage />
                <h1>Review Card</h1>
            </div>
            <div className="review-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quae recusandae officiis explicabo repudiandae alias voluptatem 
                    itaque eaque voluptas reiciendis esse?
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;