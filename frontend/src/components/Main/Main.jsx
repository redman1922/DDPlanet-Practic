import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDevicesQuery} from "../../features/authSlice";
import GetDevaices from "./detail/Devices/GetDevaices";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import classes from "./Main.module.css";

const Main = () => {

    const navigate = useNavigate();
    const savedToken = localStorage.getItem('rtkToken');

    const {
        data: devices = [],
        isError,
        isFetching,
        isLoading,
    } = useGetDevicesQuery();

    useEffect(()=>{
        if (!savedToken) {
            navigate('/')
        }
    },[savedToken])

    const outLogin = () => {
        localStorage.removeItem('rtkToken');
        navigate('/');
    }

    return (
        <div className={classes.wrapperMain}>
            <div className={classes.positionBlocksForMain}>
                <div style={{textAlign:'right',margin:'0 0 20px'}}>
                    <button onClick={outLogin} style={{boxSizing:'border-box',padding:'5px 10px',borderRadius:'10px'}}>Выйти</button>
                </div>
                {isLoading
                    ? <h1>...Загрузка</h1>
                    : <>
                        <div className={classes.wrapperForContent}>
                            { devices.map((result) => (<div key={result.id} >
                                <GetDevaices result={result}/>
                                <YMaps>
                                    <Map width={'100%'} defaultState={{ center: [result.latitude,result.longitude], zoom: 9 }}>
                                        <Placemark defaultGeometry={[result.latitude,result.longitude]} />
                                    </Map>
                                </YMaps>;
                            </div>))}
                        </div>

                    </>}
            </div>
        </div>);
};

export default Main;