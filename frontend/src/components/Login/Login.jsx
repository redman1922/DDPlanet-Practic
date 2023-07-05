import classes from "./Login.module.css";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {newToken} from "../../features/tokenSlice";
import {useNavigate} from "react-router-dom";
import {useGetAuthorizationMutation} from "../../features/authSlice";

const Login = () => {

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addNewPost, {isLoading}] = useGetAuthorizationMutation();

    const handleButton = async (e) => {
        e.preventDefault();
        try {
            await addNewPost(dataForm).unwrap().then(response => {
                dispatch(newToken(response.access_token))
                response.status ? alert('Пользователь не авторизован')
                    : navigate('/main')
            })
        } catch (err) {
            console.log(err)
        }

        setDataForm({
            username: '',
            password: ''
        })
    }

    return (
        <div className={classes.wrapperLoginPage}>
            <form onSubmit={handleButton}  className={classes.wrapperLoginForm}>
                <h1 className={classes.loginPageTitle}>Login</h1>
                <input value={dataForm.username} onChange={(e) => setDataForm({...dataForm, username: e.target.value})}
                       placeholder={'Login'}
                       className={classes.loginPageFirstInput}
                       type="text"/>
                <input value={dataForm.password} onChange={(e) => setDataForm({...dataForm, password: e.target.value})}
                       placeholder={'Password'}
                       className={classes.loginPageInputPassword} type="password"/>
                <button type={'submit'} className={classes.loginPageButton}>Отправить</button>
            </form>
        </div>
    );
};

export default Login;