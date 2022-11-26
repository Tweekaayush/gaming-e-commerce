import React, { useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Slider.css';
import {slides} from "../data"
import Slide from './Slide';
import { useState } from 'react';
import styled from "styled-components"

const Slider = () => {

    const length = slides.length;
    const [slideIndex, setSlideIndex] = useState(0);

    // const show = setInterval(() => setSlideIndex((slideIndex+1)%length), 10000);

    function createSlide(item){
        return(
            <Slide id = {item.id} bg = {item.bg} img = {item.img} title = {item.title} avail = {item.avail}/>
        );
    }

    function handleClick(direction){
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1: length-1)
        }else{
            setSlideIndex(slideIndex < (length-1)? slideIndex + 1: 0)
        }
    }

  return (
    <div className="slider-container">
        <div className="arrow leftar" direction = "left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeftIcon/>
        </div>

        <div className="slider-content" style={{transform: "translateX(" + slideIndex * -100 + "vw)"}}>
            {slides.map(createSlide)}
        </div>
{/* 
        <Wrapper slideIndex = {slideIndex}>
            
        </Wrapper> */}

        <div className="arrow rightar" direction="right" onClick={()=>handleClick("right")}>
            <KeyboardArrowRightIcon />
        </div>
    </div>
  );
}

export default Slider;