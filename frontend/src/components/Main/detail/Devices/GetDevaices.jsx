import {useEffect, useState} from "react";
import ChangeDevices from "./ChangeDevices";
import {useGetSensorsQuery} from "../../../../features/authSlice";

const GetDevaices = ({result}) => {

    const [flag, setFlag] = useState(false);
    const {
        data = []
    } = useGetSensorsQuery(result.id);

    console.log(data)

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: 'center',
                maxWidth: '1100px', width: '100%'
            }}>
                <div style={{
                    maxWidth: '500px', width: '100%', boxSizing: 'border-box',
                    padding: '0 20px'
                }}>
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
                                        style={{
                                            boxSizing: 'border-box',
                                            padding: '12px',
                                            borderRadius: '20px',
                                            margin: '10px 0 0 0',
                                        }}>Изменить
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div style={{margin: '0 auto'}}>
                    {data.map((result) => (
                        <div style={{
                            margin: '30px 0',
                            textAlign: 'center',
                            border: '1px solid black',
                            borderRadius: '8px',
                            boxSizing: 'border-box',
                            padding: '15px'
                        }}>
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