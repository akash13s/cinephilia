import React from 'react';
import './HeroImage.css';

const HeroImage = (props) =>{
   
    return (
        <div className="hero-image">
            <img src={props.image} className="hero-image" alt='hero image'/>
            <div className="hero-text">
                <h1 className="thick" style={{fontSize:50}}>{props.title}</h1>
            </div>
        </div>
    )
}

export default HeroImage;