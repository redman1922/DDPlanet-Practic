import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDevicesQuery} from "../../features/authSlice.js";
import GetDevaices from "./detail/Devices/GetDevaices";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import classes from "./Main.module.css";

const Main = () => {

    const navigate = useNavigate();
    const savedToken = localStorage.getItem('rtkToken');
    const [collectGeo, setCollectGeo] = useState([]);

    const {
        data: devices = [],
        isLoading,
    } = useGetDevicesQuery();

    useEffect(() => {
        if (!savedToken) {
            navigate('/login')
        }
    }, [savedToken])

    const collectGeoArray = (number1, number2) => {
        setCollectGeo((prevState) => [...prevState, {type: "Point", coordinates: [number1, number2]}])
    }

    const outLogin = () => {
        localStorage.removeItem('rtkToken');
        navigate('/login');
    }

    return (
        <div className={classes.wrapperMain}>
            <div className={classes.positionBlocksForMain}>
                <div style={{textAlign: 'right', margin: '0 0 20px'}}>
                    <button onClick={outLogin}
                            style={{boxSizing: 'border-box', padding: '5px 10px', borderRadius: '10px'}}>Выйти
                    </button>
                </div>
                {isLoading
                    ? <h1>...Загрузка</h1>
                    : <>
                        <div className={classes.wrapperForContent}>
                            {devices.map((result) => (
                                <div key={result.id}>
                                    <GetDevaices collectGeoArray={collectGeoArray} result={result}/>
                                </div>
                            ))}
                            <YMaps>
                                <Map defaultState={{center: [55.831903, 37.411961], zoom: 3}} width={'100%'}>
                                    {collectGeo.map((result, index) => <Placemark key={index} geometry={result}/>)}
                                </Map>
                            </YMaps>
                        </div>
                    </>}
            </div>
        </div>);
};

export default Main;