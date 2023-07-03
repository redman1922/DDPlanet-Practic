import classes from "./Login.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGetProductsQuery} from "../../features/apiSlice";


const Login = () => {
    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        username: null,
        password: null
    });
    const {data, error, isLoading} = useGetProductsQuery()
    console.log(data);

    const handleButton = () => {
        if (dataForm.username === null && dataForm.password === null) {
            console.log('Заполни поля');
        } else {
            navigate('/main');
        }
    }

    return (
        <div className={classes.wrapperLoginPage}>
            <div className={classes.wrapperLoginForm}>
                <h1 className={classes.loginPageTitle}>Login</h1>
                <input onChange={(e) => setDataForm({...dataForm, username: e.target.value})} placeholder={'Login'}
                       className={classes.loginPageFirstInput}
                       type="text"/>
                <input onChange={(e) => setDataForm({...dataForm, password: e.target.value})} placeholder={'Password'}
                       className={classes.loginPageInputPassword} type="password"/>
                <button onClick={handleButton} className={classes.loginPageButton}>Отправить</button>
            </div>
            {(isLoading)
                ? <h1>...Loading</h1>
                : <div>{data.map(result => (
                    <div key={result.id}>
                        <div>{result.title}</div>
                        <div>{result.price}</div>
                    </div>
                ))}</div>
            }

        </div>
    );
};

export default Login;