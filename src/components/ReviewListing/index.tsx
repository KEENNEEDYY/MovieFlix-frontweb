import { Review } from 'types/review';
import ReviewCard from './ReviewCard';
import './styles.css';

type Props = {
    reviews: Review[];
}

const ReviewListing = ( props: Props) => {
    console.log(props);
    return(
        <div className="reviewlisting-container">
            {props.reviews.map((item) => (
                <ReviewCard review={item}/>
            ))}
        </div>
    );
};

export default ReviewListing;