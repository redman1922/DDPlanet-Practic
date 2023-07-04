import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path='*' element={<Login/>}/>
        </Routes>
    );
}

export default App;
