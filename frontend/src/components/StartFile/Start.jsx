import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Start = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (true) {
            navigate('/login')
        }
    }, [])

    return (
        <div>
            Start File
        </div>
    );
};

export default Start;