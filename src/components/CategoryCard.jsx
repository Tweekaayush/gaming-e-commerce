import React from 'react';
import "./CategoryCard.css";

const CategoryCard = (props) => {
  return (
    <div className="card-container">
        <img className = "card-img" src={props.img} alt="" />
        <div className="card-info">
            <h1 className='card-title'>{props.title}</h1>
            <button className='card-btn'>Shop Now</button>
        </div>
    </div>
  )
}

export default CategoryCard;