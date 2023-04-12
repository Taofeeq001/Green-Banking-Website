import React, { useState } from "react"
import "./Header.css"
import logo from "../images/logo.svg"
import toggler from "../images/hamburger.svg"
import close from "../images/close.svg"

const Header = ()=>{
    const [tog, setTog] = useState(false);
    const handleClick = ()=>{
        setTog(!tog)
    }
    return(
        <section className="header-all">
            <img src={logo} alt="" />
            <div className="navs">
                <a href=".">Home</a>
                <a href=".">About</a>
                <a href=".">Contact</a>
                <a href=".">Blog</a>
                <a href=".">Careers</a>
            </div>
            <div className="btn">
                <button><a href=".">Request Invite</a></button>
            </div>
            <div className={`${tog? "mobile-nav display": "mobile-nav"}`}>
                <a href=".">Home</a>
                <a href=".">About</a>
                <a href=".">Contact</a>
                <a href=".">Blog</a>
                <a href=".">Careers</a>
            </div>
            <button className="toggle-btn" onClick={handleClick}>
                {tog? <img src={close} alt="" />
                :<img  src={toggler} alt="" />}
            </button>
        </section>
    )
}
export default Header;

