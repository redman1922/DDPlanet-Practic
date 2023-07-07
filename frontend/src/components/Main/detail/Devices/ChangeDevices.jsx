import {useState} from "react";
import {useChangeDevicesMutation} from "../../../../features/authSlice";
import classes from "../stylesForDetails.module.css";

const ChangeDevices = ({result, setFlag}) => {

    const [data, {isLoading}] = useChangeDevicesMutation();

    const [changeDeviesForm, setChangeDeviesForm] = useState({
        name: result.name,
        comment: result.comment,
        latitude: result.latitude,
        longitude: result.longitude
    });
    const changeDevicesData = async (e) => {
        e.preventDefault()
        try {
            await data({id: result.id, changeDeviesForm}).unwrap()
            setFlag(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={changeDevicesData}>
            <h3>Имя устройства:</h3>
            <input className={classes.inputDevices} onChange={e => setChangeDeviesForm({...changeDeviesForm, name: e.target.value})}
                   placeholder='Введите имя' value={changeDeviesForm.name}></input>
            <div style={{marginBottom: '15px'}}>
                <h3 style={{marginBottom: '13px'}}>Комментарий:</h3>
                <input className={classes.inputDevices} onChange={e => setChangeDeviesForm({...changeDeviesForm, comment: e.target.value})}
                       value={changeDeviesForm.comment} placeholder='Введите комментарий'></input>
            </div>
            <div style={{textAlign: 'right'}}>
                <button className={classes.buttonDevices} type='submit'
                        style={{
                            margin: '0 30px 0 0'
                        }}>Добавить
                </button>
                <button type='button' onClick={() => setFlag(false)}
                        style={{boxSizing: 'border-box', padding: '12px', borderRadius: '20px'}}>Закрыть
                </button>
            </div>
        </form>

    );
};
export default ChangeDevices;