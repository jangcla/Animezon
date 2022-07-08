import React from "react";
import Navbar from "../nav/navbar";
import { Link } from "react-router-dom";

const InfoPage = ({infoWord}) => {
    return (
        <div>
            <Navbar/>
            <div id="info-main-container">
                <div id="info-photo">
                    
                </div>

                <div id="info-text">

                </div>
            </div>
        </div>
    )
}

export default InfoPage;