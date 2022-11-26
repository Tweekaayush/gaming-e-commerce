import React from 'react';
import './Navbar.css';
import { Badge }from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='container'>
        <div className="nav">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <h1 className='logo'>LOGO</h1>
                </Link>
            </div>
            <div className="center">
                <div className="search-box">
                        <input type="text" className='input' />
                        <SearchOutlinedIcon style={{marginLeft:"5px", cursor: "pointer"}}/>
                </div>
            </div>
            <div className="right">
                <div className="right-items">Sign In</div>
                <div className="right-items">Register</div>
                <div className="right-items">
                <Badge badgeContent={0} color="primary">
                    <ShoppingCartIcon />
                </Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;