import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import SensorsItem from "./components/Main/detail/Sensors/SensorsItem";
import Start from "./components/StartFile/Start";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path='*' element={<Login/>}/>
            <Route path='/devices/:devicesId/sensors/:id' element={<SensorsItem/>}/>
        </Routes>
    );
}

export default App;
