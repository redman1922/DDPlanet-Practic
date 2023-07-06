import {useNavigate, useParams} from "react-router-dom";
import {useGetSensorsItemQuery} from "../../../../features/authSlice";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Graph from "./Graph";
import SensorsChange from "./SensorsChange";

const SensorsItem = () => {
    const navigate = useNavigate();
    const token = useSelector(state => state.reducer.token.token);

    useEffect(() => {
        if (!token) {
            navigate('/')
        }

    }, [token])

    const params = useParams();
    const {data, isLoading} = useGetSensorsItemQuery(params);
    const [flag, setFlag] = useState(false);

    return (
        <div style={{
            maxWidth: '1100px',
            width: '100%',
            margin: '50px auto 0',
            background: 'white',
            borderRadius: '10px',
            textAlign: 'center'
        }}>
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
                            <p style={{cursor:'pointer'}} onClick={()=>setFlag(true)}>Изменить название</p>
                        </>
                        : <SensorsChange data={data} setFlag={setFlag}/>}
                    <div>
                        <Graph/>
                    </div>
                </>}
        </div>
    );
};

export default SensorsItem;