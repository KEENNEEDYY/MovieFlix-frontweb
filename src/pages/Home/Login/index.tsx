import { AuthContext } from 'AuthContext';
import Button from 'components/Button';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storange';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies"} };

    const {setAuthContextData} = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit } = useForm<FormData>();
    const history = useHistory();

    const onSubmit = (formData : FormData) => {
        requestBackendLogin(formData)
        .then(response => {
            saveAuthData(response.data);
            setHasError(false);
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData(),
            })
            history.replace(from);
        })
        .catch( error => {
            setHasError(true);
        });
    };

    return(
        <div className="base-card">            
            <h1>Login</h1>
            { hasError && 
                <div className="alert alert-danger">
                    Ocorreu um erro ao tentar efetuar o Login!!
                </div>           
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input 
                        {...register("username")}
                        type="text" 
                        placeholder="Email" 
                        name="username"
                    />
                </div>
                <div className="mb-2">
                    <input 
                        {...register("password")}
                        type="password" 
                        placeholder="Senha" 
                        name="password" 
                    />
                </div>
                <div className="login-submit">
                    <Button value="Fazer Login"/>
                </div>
            </form>
        </div>
    );
};

export default Login;