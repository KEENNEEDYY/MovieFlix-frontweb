import Button from 'components/Button';
import './styles.css';

type Props = {
    movieId: string;
}

const ReviewForm = ({movieId}: Props) => {
    
    return(
        <form className="form-container">
            <input 
                type="text"
                name="text"
                placeholder="Deixe sua avaliação aqui"
                onChange={() => {}}
             />

             <Button value="SALVAR ALTERAÇÃO"/>

        </form>
    );
};

export default ReviewForm;