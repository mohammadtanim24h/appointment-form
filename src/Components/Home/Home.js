import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2 className="text-center mt-3">
                Welcome to{" "}
                <span className="text-primary fw-bold">KnockOnce</span>
            </h2>
            <p className="text-center">Please make your <Link to="/appointment">Appointment</Link></p>
        </div>
    );
};

export default Home;
