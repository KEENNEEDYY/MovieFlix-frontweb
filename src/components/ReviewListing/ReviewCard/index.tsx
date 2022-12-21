import {ReactComponent as StarImage} from 'assets/images/start.svg';
import axios from 'axios';
import { BASE_URL } from 'util/requests';

import './styles.css';

const ReviewCard = () => {
    axios.get(BASE_URL+'/reviews/1')
        .then((response) => {
            console.log(response.data);
        })
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