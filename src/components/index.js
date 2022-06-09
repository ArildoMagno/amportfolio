import React from "react";
import Header from "./Header";
import ParticlesView from "./Particles";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Header/>
            <ParticlesView/>
        </React.Fragment>
    );
};

export default Home;
