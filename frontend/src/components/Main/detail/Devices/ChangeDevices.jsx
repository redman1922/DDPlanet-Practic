import {useState} from "react";
import {useChangeDevicesMutation} from "../../../../features/authSlice.js";
import classes from "../stylesForDetails.module.css";

const ChangeDevices = ({result, setFlag}) => {

    const [data] = useChangeDevicesMutation();

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

    const handleChangeInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setChangeDeviesForm(prevState => ({...prevState, name: e.target.value}));
                break;
            case 'comment':
                setChangeDeviesForm(prevState => ({...prevState, comment: e.target.value}));
                break;
        }
    }

    return (
        <form onSubmit={changeDevicesData}>
            <h3>Имя устройства:</h3>
            <input className={classes.inputDevices}
                   onChange={handleChangeInput}
                   name='name'
                   placeholder='Введите имя' value={changeDeviesForm.name}/>
            <div style={{marginBottom: '15px'}}>
                <h3 style={{marginBottom: '13px'}}>Комментарий:</h3>
                <input className={classes.inputDevices}
                       onChange={handleChangeInput}
                       name='comment'
                       value={changeDeviesForm.comment} placeholder='Введите комментарий'/>
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