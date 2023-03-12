import {useState} from 'react';
import { AxiosRequestConfig } from 'axios';
import {  toast } from 'react-toastify';
import { requestBackend } from 'util/requests';
import { Review } from 'types/review';
import Button from 'components/Button';

import './styles.css';

type FormData = {
    text: string;
    movieId: number;
}

type Props = {
    movieId: string;
    onInsertReview: (review: Review) => void;
}

const ReviewForm = ({movieId, onInsertReview}: Props) => {

    const [formData, setFormData] = useState<FormData>({
        text: '', movieId:parseInt(movieId),
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const text = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData , [text]: value});
    };

    const clearForm = () => {
        setFormData({text: '', movieId: parseInt(movieId)});
    }


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const params: AxiosRequestConfig = {
            method: 'POST',
            url: '/reviews',
            data: formData,
            withCredentials: true,
        };

        requestBackend(params).then((response) => {
            onInsertReview(response.data);
            toast.success('Review salva com sucesso!')
            console.log("SALVO COM SUCESSO ", response.data);
        })
        .catch(error => {
            toast.error('Erro ao salvar a review!')
            console.log("ERRO AO SALVAR", error);
        })
        clearForm();
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