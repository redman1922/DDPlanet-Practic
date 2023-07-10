import {useEffect, useState} from "react";
import ChangeDevices from "./ChangeDevices";
import {useGetSensorsQuery} from "../../../../features/authSlice";
import {useNavigate} from "react-router-dom";
import classes from "../stylesForDetails.module.css";

const GetDevaices = ({result, collectGeoArray}) => {

    const [flag, setFlag] = useState(false);
    const {
        data = []
    } = useGetSensorsQuery(result.id);

    const navigate = useNavigate();
    const savedToken = localStorage.getItem('rtkToken');

    useEffect(() => {
        if (!savedToken) {
            navigate('/login')
        }
    }, [savedToken]);

    useEffect(() => {
        collectGeoArray(result.latitude, result.longitude)
    }, [result])

    const viewSensorsItem = (deviceId, id) => {
        navigate(`/devices/${deviceId}/sensors/${id}`,)
    }

    return (
        <>
            <div className={classes.wrapperForDevices}>
                <div className={classes.marginForDevices}>
                    {flag
                        ? <ChangeDevices result={result} setFlag={setFlag}/>
                        : <div>
                            <h3>Имя устройства:</h3>
                            <p style={{margin: '13px 0'}}>{result.name}</p>
                            <div>
                                <h3 style={{marginBottom: '13px'}}>Комментарий:</h3>
                                <p>{result.comment}</p>
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <button onClick={() => setFlag(true)}
                                        className={classes.buttonDevices}>Изменить
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div style={{margin: '0 auto'}}>
                    {data.map((result) => (
                        <div key={result.id} className={classes.sensorsItem}
                             onClick={() => viewSensorsItem(result.deviceId, result.id)}>
                            <div>{result.name}</div>
                            <div>{result.comment}</div>
                        </div>
                    ))}
                </div>
            </div>
            <hr style={{margin: '15px 0'}}/>
        </>
    );
};

export default GetDevaices;