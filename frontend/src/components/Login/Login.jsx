import classes from "./Login.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGetPokemonByNameQuery} from "../../features/apiSlice";

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: null,
        password: null
    });
    const { dataApi, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
    console.log(dataApi);

    const handleButton = () => {
        if (data.username === null && data.password === null) {
            console.log('Заполни поля');
        } else {
            navigate('/main');
        }
    }

    return (
        <div className={classes.wrapperLoginPage}>
            <div className={classes.wrapperLoginForm}>
                <h1 className={classes.loginPageTitle}>Login</h1>
                <input onChange={(e) => setData({...data, username: e.target.value})} placeholder={'Login'}
                       className={classes.loginPageFirstInput}
                       type="text"/>
                <input onChange={(e) => setData({...data, password: e.target.value})} placeholder={'Password'}
                       className={classes.loginPageInputPassword} type="password"/>
                <button onClick={handleButton} className={classes.loginPageButton}>Отправить</button>
            </div>
            <div>{dataApi}</div>
        </div>
    );
};

export default Login;