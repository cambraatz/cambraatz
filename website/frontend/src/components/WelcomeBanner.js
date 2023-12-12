import React from 'react';
import Headshot from '../assets/headshot.jpg'
import ResumeCont from './ResumeCont';

const WelcomeBanner = () => {
    return (
        <div>
            {/*<h2 id="welcome_title">Welcome</h2>*/}
            <div id="welcome_box">
                <div className="welcome_img_cont">
                    <img id="welcome_pic" src={Headshot} alt="Headshot of Cameron"/>
                </div>
                <div className="welcome_text_cont">
                    <h2 id="welcome_title">Welcome</h2>
                    <p id="welcome_text">
                        My name is Cameron Braatz and this site serves as a living collection of my personal 
                        and professional work. I love design, programming, art among other things. I invite you to look around and see who 
                        I am and what I have been up to!
                    </p>
                </div>
            </div>
            <ResumeCont />
        </div>
    );
}

export default WelcomeBanner;