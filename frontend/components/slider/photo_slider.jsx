import React from 'react';
import { Link } from 'react-router-dom';

class PhotoSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 1
        }

        this.clickRight = this.clickRight.bind(this);
        this.clickLeft = this.clickLeft.bind(this);
    }

    componentDidMount() {
        let counter = 1;

        this.time = setInterval(function () {
            let slide = document.getElementById('radio' + counter)
            slide.checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            };
           
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    clickRight(e) {
        e.preventDefault();

        console.log(this.state)
        clearInterval(this.time);
        const val = this.state.count + 1  > 4 ? 1 : this.state.count + 1;
        let slide = document.getElementById('radio' + val);
        slide.checked = true;
        this.setState({
            "count" : val
        })
    }

    clickLeft(e) {
        e.preventDefault();

        clearInterval(this.time);
        const val = this.state.count - 1 < 1 ? 4 : this.state.count - 1;
        let slide = document.getElementById('radio' + val);
        slide.checked = true;
        this.setState({
            "count": val
        })
    }
    
    render() {
        return (
 
                <div className="slider">
                        <button onClick={this.clickLeft} id="slider-button-to-move-l">
                            <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/icon-left.png?raw=true" id='slider-icon-l-and-r'/>
                        </button>

                        <button onClick={this.clickRight} id='slider-button-to-move-r'>
                            <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/icon-right.png?raw=true" id='slider-icon-l-and-r'/>
                        </button>
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
                                        <p id='s1t1'><img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/one-piece-inner-banner.png?raw=true" id="one-piece-inner-banner" /></p>
                                        <Link to='/items/1' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/oneP-banner.png?raw=true" id='slide-photo' />
                                        </Link>
                                    </div>
                                    <div className="slide-three">
                                        <p id='s1t1'><img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/hunter-inner-banner.png?raw=true" id="hunter-inner-banner" /></p>
                                        <Link to='/items/3' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/hunterx-banner.png?raw=true" id='slide-photo' />
                                        </Link>
                                    </div>
                                    <div className="slide-four">
                                        <p id='s1t1'><img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/myhero-inner-banner.png?raw=true" id="my-hero-inner-banner"/></p>
                                        <Link to='/items/8' id='slide-link'>
                                            <img src="https://github.com/jangcla/Animezon/blob/sales/photos/slider-banners/my-her0-banner.png?raw=true" id='slide-photo' />
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















