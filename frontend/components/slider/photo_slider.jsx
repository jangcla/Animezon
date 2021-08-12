import React from 'react';
import { Link } from 'react-router-dom';


class PhotoSlider extends React.Component {
    componentDidMount() {
        var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 6000);
    }

    render() {
        return (

            <div className="slider">
                <div className="slides">
            
                <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
                            
                                <div className="slide first" id='slide-one'>
                                    <Link to=''>
                                        <img src="http://i.imgur.com/8AHAoTf.gif" id='slide-photo1'/>
                                    </Link>
                                </div>
                                <div className="slide-two">
                                    <Link to='/items/29' id='slide-link'>
                                        <img src="https://do.lolwot.com/wp-content/uploads/2015/04/20-of-the-best-anime-series-ever-created-2.jpg" id='slide-photo' />
                                    </Link>
                                </div>
                                <div className="slide-three">
                                    <Link to='/items/31' id='slide-link'>
                                        <img src="https://pbs.twimg.com/media/EGUS_PzWwAAStTa.jpg" id='slide-photo' />
                                    </Link>
                                </div>
                                <div className="slide-four">
                                    <Link to='/items/36' id='slide-link'>
                                        <img src="https://io.dropinblog.com/uploaded/blogs/34239009/files/featured/42370119_My-hero-academia-big-3-in-shonen-anime.png" id='slide-photo' />
                                    </Link>
                                </div>
                                
                                
                </div>
                                {/* <div className="navigation-auto">
                                    <div className="auto-btn1"></div>
                                    <div className="auto-btn2"></div>
                                    <div className="auto-btn3"></div>
                                    <div className="auto-btn4"></div>
                                </div>
                            
                            <div className="navigation-manual">
                                <label htmlFor="radio1" className="manual-btn"></label>
                                <label htmlFor="radio2" className="manual-btn"></label>
                                <label htmlFor="radio3" className="manual-btn"></label>
                                <label htmlFor="radio4" className="manual-btn"></label>
                            </div> */}
                            
            </div>
        )
    }
}


export default PhotoSlider














