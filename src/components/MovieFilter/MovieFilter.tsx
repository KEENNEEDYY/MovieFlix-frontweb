import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { AxiosParams } from 'types/vendor/axios';
import { BASE_URL, requestBackend } from 'util/requests';


import './styles.css'

export type MovieFilterData = {
    name: string;
    genre: Genre | null;
}

type Props = {
    onSubmitFilter: (data: MovieFilterData) => void;
}

const MovieFilter = ({ onSubmitFilter }: Props) => {

    const { 
        setValue,
        getValues, 
    } = useForm<MovieFilterData>();

    const handleChangeGenre = (value: Genre) => {
        setValue('genre', value);
        const obj : MovieFilterData = {
            name: getValues('name'),
            genre: getValues('genre')
        }
        onSubmitFilter(obj);
    }

    const [selectGenries, setSelectGenries] = useState<Genre[]>([]);

    useEffect( () => {
        const params: AxiosParams = {
            method: 'GET',
            url: `${BASE_URL}/genres`,
            withCredentials: true,
        }

        requestBackend(params)
            .then( (response) => {
                setSelectGenries(response.data);
            })
        
    }, [])

    return(
            <div className="movie-filter-container">
                <form className="movie-filter">
                    <Select options={selectGenries} classNamePrefix="movie-filter" 
                        isClearable
                        onChange={ value => handleChangeGenre(value as Genre)}
                        getOptionLabel={(genre: Genre) => genre.name}
                        getOptionValue={(genre: Genre) => String(genre.id)}
                    />                    
                </form>
            </div>       
    )
};

export default MovieFilter;