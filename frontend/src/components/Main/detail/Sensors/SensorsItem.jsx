import {useNavigate, useParams} from "react-router-dom";
import {useGetSensorsItemQuery} from "../../../../features/authSlice";
import {useEffect, useState} from "react";
import Graph from "../Graph/Graph";
import SensorsChange from "./SensorsChange";
import classes from "../stylesForDetails.module.css";

const SensorsItem = () => {


    const params = useParams();
    const {data, isLoading} = useGetSensorsItemQuery(params);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const savedToken = localStorage.getItem('rtkToken');

    useEffect(() => {
        if (!savedToken) {
            navigate('/login')
        }
    }, [savedToken])

    return (
        <div className={classes.wrapperForSensors}>
            {isLoading ? <h1>...Loading</h1>
                : <>
                    {!flag
                        ? <>
                            <h2>
                                {data.name} №{data.id}
                            </h2>
                            <h3>
                                {data.comment}
                            </h3>
                        </>
                        : <SensorsChange data={data} setFlag={setFlag}/>}
                    <div>
                        <Graph flag={flag} setFlag={setFlag}/>
                    </div>
                </>}
            <button style={{margin: '0 20px 20px 0'}} onClick={() => navigate('/main')}
                    className={classes.buttonForNavigate}>Назад
            </button>

            {!flag
                ? <button onClick={() => setFlag(true)} className={classes.buttonForNavigate}>Изменить</button>
                : <></>
            }

        </div>
    );
};

export default SensorsItem;