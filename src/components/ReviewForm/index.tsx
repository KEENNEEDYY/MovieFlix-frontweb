import Button from 'components/Button';
import './styles.css';

const ReviewForm = () => {
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