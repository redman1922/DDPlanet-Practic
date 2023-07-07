import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDevicesQuery} from "../../features/authSlice";
import GetDevaices from "./detail/Devices/GetDevaices";
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";


const cities = [
    {
        coords: [59.93863, 30.31413]
    },
    {
        coords: [55.630527, 37.849046]
    },
    {
        coords: [55.753559, 37.609218]
    },
    {
        coords: [55.753559, 37.609218]
    },
];

const Main = () => {

    const token = useSelector(state => state.reducer.token.token);
    const navigate = useNavigate();

    const {
        data: devices = [],
        isError,
        isFetching,
        isLoading,
    } = useGetDevicesQuery();

    useEffect(() => {
        if (!token || isError) {
            navigate('/')
        }
    }, [token])

    return (
        <div style={{
            maxWidth: '1900px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            boxSizing: 'border-box',
            padding: '50px 0 0',
        }}>
            <div style={{
                display: "flex", flexDirection: 'column', maxWidth: '1100px',
                width: '100%', margin: '0 auto'
            }}>
                {isLoading
                    ? <h1>...Загрузка</h1>
                    : <>
                        <div style={{
                            background: '#ededed',
                            boxSizing: 'border-box',
                            padding: '20px',
                            borderRadius: '10px',
                            marginBottom: '20px'
                        }}>
                            { devices.map((result) => (<div key={result.id} >
                                {console.log([result.latitude,result.longitude])}
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