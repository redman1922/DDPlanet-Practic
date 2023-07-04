import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Main = () => {

    const token = useSelector(state => state.reducer.token.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [token])


    return (
        <div style={{maxWidth: '1900px', width: '100%', background: '#ededed', margin: '0 auto', height: '350px',display:'flex'}}>
            <div style={{width:'350px'}}>Список:</div>
            <div>Основной блок:</div>
        </div>
    );
};

export default Main;