import React from 'react';
import CategoryCard from "./CategoryCard";
import { categories } from '../data';

const Categories = () => {

    function createCategory(item){
       return <CategoryCard id = {item.id} title = {item.title} img = {item.img}/>
    }

  return (
    <div className="category-container" style={{display: 'flex', padding: "20px", justifyContent: "space-between"}}>
        {categories.map(createCategory)}
    </div>
  )
}

export default Categories;