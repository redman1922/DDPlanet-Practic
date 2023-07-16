import classes from "./Login.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGetAuthorizationMutation} from "../../features/authSlice.js";

const Login = () => {

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const [addNewPost] = useGetAuthorizationMutation();

    const handleButton = async (e) => {
        e.preventDefault();
        try {
            await addNewPost(dataForm).unwrap().then(response => {
                localStorage.setItem('rtkToken', response.access_token)
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

    const handleChangeInput = (e) => {
        switch (e.target.name) {
            case 'login':
                setDataForm(prevState => ({...prevState, username: e.target.value}));
                break;
            case 'password':
                setDataForm(prevState => ({...prevState, password: e.target.value}));
                break;
        }
    }

    return (
        <div className={classes.wrapperLoginPage}>
            <form onSubmit={handleButton} className={classes.wrapperLoginForm}>
                <h1 className={classes.loginPageTitle}>Login</h1>
                <input
                    value={dataForm.username}
                    onChange={handleChangeInput}
                    placeholder={'Login'}
                    name='login'
                    className={classes.loginPageFirstInput}
                    type="text"/>
                <input value={dataForm.password}
                       onChange={handleChangeInput}
                       placeholder={'Password'}
                       name='password'
                       className={classes.loginPageInputPassword} type="password"/>
                <button type={'submit'} className={classes.loginPageButton}>Отправить</button>
            </form>
        </div>
    );
};

export default Login;