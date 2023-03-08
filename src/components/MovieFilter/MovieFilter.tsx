import Select from 'react-select';


import './styles.css'

type MovieFilterData = {
    Genre: String;
}

const MovieFilter = () => {

    const options= [
        {value: 'Açao', label: 'Açao'},
        {value: 'Romance', label: 'Romance'},
        {value: 'Terror', label: 'Terror'}
        ]


    const onSubmit = (formData: MovieFilterData) => {
        console.log("ENVIOU" + FormData);
    }

    return(
            <div className="movie-filter-container">
                <form onSubmit={ ( ) => {  }}  className="movie-filter">
                    <Select options={options} isMulti classNamePrefix="movie-filter" />                    
                </form>
            </div>       
    )
};

export default MovieFilter;