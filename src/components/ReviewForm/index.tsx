import {useState} from 'react';
import Button from 'components/Button';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type FormData = {
    text: string;
    movieId: number;
}

type Props = {
    movieId: string;
}

const ReviewForm = ({movieId}: Props) => {

    const [formData, setFormData] = useState<FormData>({
        text: '', movieId:parseInt(movieId),
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const text = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData , [text]: value});
    };


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const params: AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            data: formData,
            withCredentials: true,
        };

        requestBackend(params).then((response) => {
            console.log(response.data);
        })
    };
    
    return(
        <form className="form-container" onSubmit={submitHandler}>
            <input 
                type="text"
                name="text"
                value={formData?.text}
                placeholder="Deixe sua avaliação aqui"
                onChange={handleChange}
             />

             <Button value="SALVAR ALTERAÇÃO"/>

        </form>
    );
};

export default ReviewForm;