import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="left-container">
            <h1 className="footer-logo">LOGO</h1>
            <p className="footer-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, mollitia.</p>
            <div className="icons-container">
                <div className="icons" style={{backgroundColor:"blue"}}>
                    <FacebookIcon />
                </div>
                <div className="icons" style={{backgroundColor: "Magenta"}}>
                    <InstagramIcon />
                </div>
                <div className="icons" style={{backgroundColor:"cyan"}}>
                    <TwitterIcon />
                </div>
            </div>
        </div>
        <div className="rignt-container">
            <h2 className='f-title'>Useful Link</h2>
            <ul className="f-list">
                <li className="f-list-items">Home</li>
                <li className="f-list-items">My Account</li>
                <li className="f-list-items">WishList</li>
                <li className="f-list-items">Cart</li>
                <li className="f-list-items">Gaming Accessories</li>
                <li className="f-list-items">Preferences</li>
                <li className="f-list-items">Orders</li>
                <li className="f-list-items">Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;