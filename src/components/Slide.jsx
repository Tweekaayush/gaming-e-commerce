import React from 'react';
import {Link, useParams} from "react-router-dom";
import "./Slide.css";

const Slide = (props) => {

    let { productId } = useParams();

  return (
    <Link to={`/product/${props.id}`}>
        <div className="slide">
        <div className="slide-gradient"></div>
        <img src={props.img} alt="" className='slide-img' />
        <div className="slide-content">
            <h1 className="title">
                {props.title}
            </h1>
            <p className="desc">
                {props.avail}
            </p>
            <Link to={`/product/${props.id}`}>
                <button className="slide-btn">
                    Shop Now
                </button>
            </Link>
        </div>
        </div>
    </Link>
  )
}

export default Slide;