import {useState} from "react";
import {useChangeSensorsMutation} from "../../../../features/authSlice.js";
import classes from "../stylesForDetails.module.css";

const SensorsChange = ({data, setFlag}) => {

    const [valueForm, setValueForm] = useState({
        name: data.name,
        comment: data.comment
    });

    const [changeSensors] = useChangeSensorsMutation();

    const changeSensorsData = async (e) => {
        e.preventDefault()
        try {
            await changeSensors({id: data.id, valueForm})
            setFlag(false);
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setValueForm(prevState=> ({...prevState, name: e.target.value}));
                break;
            case 'comment':
                setValueForm(prevState => ({...prevState, comment: e.target.value}));
                break;
        }
    }

    return (
        <form onSubmit={changeSensorsData}
              style={{display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto'}}>
            <input className={classes.inputSensors} onChange={handleChangeInput}
                   value={valueForm.name}
                   type="text"
                   name='name'
            />
            <input className={classes.inputSensors} style={{margin: '0'}}
                   onChange={handleChangeInput}
                   value={valueForm.comment}
                   type="text"
                   name='comment'
            />
            <button className={classes.buttonSensors}>Исправить</button>
        </form>
    );
};

export default SensorsChange;