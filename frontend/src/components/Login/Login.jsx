import classes from "./Login.module.css";
import {useState} from "react";
import {useAddNewPostMutation} from "../../features/apiSlice";


const Login = () => {

    const [dataForm, setDataForm] = useState({
        username: null,
        password: null
    });
    const [addNewPost, { isLoading }] = useAddNewPostMutation()

    const handleButton = async () => {
        console.log(dataForm)
        try {
            console.log(addNewPost(dataForm))
            await addNewPost(dataForm).unwrap()
        } catch (err){
            console.log(err)
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
        </div>
    );
};

export default Login;