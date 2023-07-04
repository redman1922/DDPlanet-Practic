import classes from "./Login.module.css";
import {useState} from "react";
import {useAddNewPostMutation} from "../../features/apiSlice";
import {useDispatch, useSelector} from "react-redux";
import {newToken} from "../../features/tokenSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addNewPost, {isLoading}] = useAddNewPostMutation();

    const handleButton = async () => {
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
            <div className={classes.wrapperLoginForm}>
                <h1 className={classes.loginPageTitle}>Login</h1>
                <input value={dataForm.username} onChange={(e) => setDataForm({...dataForm, username: e.target.value})}
                       placeholder={'Login'}
                       className={classes.loginPageFirstInput}
                       type="text"/>
                <input value={dataForm.password} onChange={(e) => setDataForm({...dataForm, password: e.target.value})}
                       placeholder={'Password'}
                       className={classes.loginPageInputPassword} type="password"/>
                <button onClick={handleButton} className={classes.loginPageButton}>Отправить</button>
            </div>
        </div>
    );
};

export default Login;