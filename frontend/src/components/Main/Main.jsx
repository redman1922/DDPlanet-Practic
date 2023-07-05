import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useGetDevicesQuery} from "../../features/authSlice";
import GetDevaices from "./detail/Devices/GetDevaices";



const Main = () => {

    const token = useSelector(state => state.reducer.token.token);
    const navigate = useNavigate();

    const {
        data: devices = [],
        isFetching,
        isLoading,
    } = useGetDevicesQuery( );


    useEffect(() => {
        if (!token) {
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
                width: '100%',margin:'0 auto'
            }}>
                {isLoading
                    ? <h1>...Загрузка</h1>
                    : <div style={{
                        background: '#ededed',
                        boxSizing: 'border-box',
                        padding: '20px',
                        borderRadius: '10px',
                        marginBottom: '20px'
                    }}>{devices.map((result) => <GetDevaices key={result.id} result={result}/>)}
                    </div>}
            </div>
        </div>
    );
};

export default Main;