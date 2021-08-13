import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar';

class UnderConstruction extends React.Component {
    render() {
        return (
            <div id="unavailable-main">
                <Navbar/>
                <div id="unavailable-inner">
                    <div id="anime-at-work">
                        <img src="https://64.media.tumblr.com/33cec5fffbef6cf57aed4e538a85407c/tumblr_onxl2newUq1w05w8zo1_500.gifv" id='coding-anime'/>
                    </div>

                    <div id="app-cont">
                        <div id="apology">
                            <p>Sorry looks like the page you're looking for is currently under going development</p>
                            <img src="https://www.nicepng.com/png/full/111-1110394_itachi-facepalm-anime-facepalm.png"/>
                        </div>

                        <div id="apology">
                            <p>For now click here to navigate back to the website</p>
                            <br />
                            <br />
                            <Link to='/' id='leave'>Nothing to see here</Link>
                            <img src="https://i.pinimg.com/originals/03/fb/55/03fb5513a8bb9a452a60b910d82d47eb.gif" id="leave-but" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default UnderConstruction;