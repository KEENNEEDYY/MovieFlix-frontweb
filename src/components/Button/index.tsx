import './styles.css';

type Props ={
    value : string;
}

const Button = ({value} : Props) => {
    return(
        <div className="btn-container">
            <button className="btn button btn-primary">
                <p>{value}</p>
            </button>
        </div>
    )
}

export default Button;