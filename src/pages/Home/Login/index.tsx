import Button from 'components/Button';
import './styles.css';

const Login = () => {
    return(
        <div className="base-card">            
            <h1>Login</h1>
            <form >
                <div className="mb-4">
                    <input type="text" placeholder="Email" name="username"/>
                </div>
                <div className="mb-2">
                    <input type="password" placeholder="Senha" name="password" />
                </div>
                <div className="login-submit">
                    <Button value="Fazer Login"/>
                </div>
            </form>
        </div>
    );
};

export default Login;