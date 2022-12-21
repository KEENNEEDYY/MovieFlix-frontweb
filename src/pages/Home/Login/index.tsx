import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData : FormData) => {
        console.log(formData);
        requestBackendLogin(formData)
        .then(response => {
            console.log('SUCESSO', response);
        })
        .catch( error => {
            console.log('ERRO',error);
        });
    };

    return(
        <div className="base-card">            
            <h1>Login</h1>
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