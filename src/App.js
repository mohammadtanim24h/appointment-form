import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Appointment from "./Components/Appointment/Appointment";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/appointment"
                    element={<Appointment></Appointment>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
