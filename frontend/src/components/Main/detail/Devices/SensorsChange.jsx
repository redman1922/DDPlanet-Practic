import {useState} from "react";
import {useChangeSensorsMutation} from "../../../../features/authSlice";

const SensorsChange = ({data, setFlag}) => {

    const [valueForm, setValueForm] = useState({
        name: data.name,
        comment: data.comment
    });

    const [changeSensors,{isLoading}] = useChangeSensorsMutation();

    const changeSensorsData = async (e) => {
        e.preventDefault()
        try {
            await changeSensors({id:data.id,valueForm})
            setFlag(false);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={changeSensorsData} style={{display:'flex',flexDirection:'column', maxWidth:'400px', margin:'0 auto'}} >
            <input style={{
                textAlign:'center',
                maxWidth: '400px',
                margin: '15px 0 7px',
                width: '100%',
                height: '28px',
                boxSizing: 'border-box',
                padding: '5px',
                borderRadius: '10px'
            }} onChange={(e) => setValueForm({...valueForm, name: e.target.value})}
                   value={valueForm.name}
                   type="text"/>
            <input style={{
                textAlign:'center',
                maxWidth: '400px',
                width: '100%',
                height: '28px',
                boxSizing: 'border-box',
                padding: '5px',
                borderRadius: '10px'
            }} onChange={(e) => setValueForm({...valueForm, comment: e.target.value})}
                   value={valueForm.comment}
                   type="text"/>
            <button style={{padding:'5px',boxSizing:'border-box',borderRadius:'10px',margin:'5px auto 0',maxWidth:'200px', width:'100%'}}>Исправить</button>
        </form>
    );
};

export default SensorsChange;