import React, { useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gow from "../assets/images/4xJ8XB3bi888QTLZYdl7Oi0s.webp";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Product.css"
import { slides } from "../data";
import { useParams } from 'react-router-dom';

const Product = () => {

  const { productId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = slides.find((slide) => slide.id === parseInt(productId))
    if (item) {
      setItem(item)
    }
  }, [productId]);

  return (
    <>
        {item? (
            <div className="single-product-info-container">
            <div className="p-s-img-container">
                <img src={item.img} alt="" className='p-s-img'/>
            </div>
            <div className="p-s-info">
                <h1 className="p-s-info-title">{item.title}</h1>
                <p className="p-s-info-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure recusandae provident officiis earum explicabo ipsum quis, dolorem vero magnam est, tenetur, nobis atque velit. Tenetur sapiente rem nemo nulla.
                </p>
                <div className="p-s-price">50 $</div>
                <div className="p-b-list">
                    <button className="a-t-c-s">Add to Cart</button>
                    <button className="a-t-w-s"><AddCircleOutlineIcon style={{marginRight:"5px"}}/>  Add to Wishlist</button>
                </div>
                <div className="p-s-requirements">
                    <div className="req-title">System Requirements</div>
                    <hr className='p-s-hr'/>
                    <ul className="specs">
                        <li className="req">Os: <span className='req-d'> 64-bit Windows 7/8.1/10</span></li>
                        <li className="req">Processor: <span className='req-d'> AMD FX-6100/Intel i3-3220 or Equivalent</span></li>
                        <li className="req">Memory: <span className='req-d'> 8 GB RAM</span></li>
                        <li className="req">Graphics: <span className='req-d'> AMD Radeon HD 7750, NVIDIA GeForce GTX 650 or Equivalent</span></li>
                        <li className="req">DirectX: <span className='req-d'> Version 11</span></li>
                        <li className="req">Storage: <span className='req-d'> 55 GB available space</span></li>
                    </ul>
                </div>
            </div>
        </div>
        ) : <h1>"product not found"</h1>}
    </>
  );
}

export default Product;