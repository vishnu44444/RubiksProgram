import 'rc-slider/assets/index.css';
import './Speeds.css';
import React from 'react';
import Slider from 'rc-slider'

const style = { width: "20%", position: "fixed", top: "85px", left: "10px",fontSize:"1rem"};

const Speeds = props => (

    <div className="sliderDiv" style = {style}>

        {props.isDisabled ?
        <Slider 
            defaultValue={1} 
            value={props.speed}
            min={props.speed} max={props.speed} 
            step={1}
        />
        :
        <Slider 
            defaultValue={1} 
            value={props.speed}
            min={0} max={70} 
            step={1}
            onChange={props.onSliderChange}
        />}

    </div>
);



export default Speeds;