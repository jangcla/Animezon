import React from 'react';
import { Link } from 'react-router-dom';

class PhotoSlider extends React.Component {
    
    componentDidMount() {
        var counter = 1;
        this.time = setInterval(function () {
            let slide = document.getElementById('radio' + counter)
            slide.checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.time)
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
                                        <p id='s1t'><big> YOU SHOULD BE WATCHING</big></p>
                                        <Link to='/error/underdevelopment'>
                                            <img id='slide-photo1'/>
                                        </Link>
                                    </div>
                                    <div className="slide-two">
                                        <p id='s1t1'><big> One Piece</big></p>
                                        <Link to='/items/1' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/search/profile-banners/op-banner.png?raw=true" id='slide-photo' />
                                        </Link>
                                    </div>
                                    <div className="slide-three">
                                        <p id='s1t1'><big> Hunter x Hunter</big></p>
                                        <Link to='/items/3' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/search/profile-banners/hh-banner.png?raw=true" id='slide-photo' />
                                        </Link>
                                    </div>
                                    <div className="slide-four">
                                        <p id='s1t1'><big> My Hero Academia</big></p>
                                        <Link to='/items/8' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/search/profile-banners/mh-banner.png?raw=true" id='slide-photo' />
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















