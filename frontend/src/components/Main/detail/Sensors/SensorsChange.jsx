import {useState} from "react";
import {useChangeSensorsMutation} from "../../../../features/authSlice";
import classes from "../stylesForDetails.module.css";

const SensorsChange = ({data, setFlag}) => {

    const [valueForm, setValueForm] = useState({
        name: data.name,
        comment: data.comment
    });

    const [changeSensors, {isLoading}] = useChangeSensorsMutation();

    const changeSensorsData = async (e) => {
        e.preventDefault()
        try {
            await changeSensors({id: data.id, valueForm})
            setFlag(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={changeSensorsData}
              style={{display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto'}}>
            <input className={classes.inputSensors} onChange={(e) => setValueForm({...valueForm, name: e.target.value})}
                   value={valueForm.name}
                   type="text"/>
            <input className={classes.inputSensors} style={{margin: '0'}}
                   onChange={(e) => setValueForm({...valueForm, comment: e.target.value})}
                   value={valueForm.comment}
                   type="text"/>
            <button className={classes.buttonSensors}>Исправить</button>
        </form>
    );
};

export default SensorsChange;