import React from "react";
import ReactDOM from 'react-dom';

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


const Home = () => {
    return(
        <>
        <Navbar/>

        <div className="container">
            <Jumbotron/>
        </div>

        <Card/>
        <Card/>
        <Card/>
        <Card/>    
        </>
    );
}
export default Home;