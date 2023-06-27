// import React, { useContext } from "react";
import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
   <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"  alt="xyz"/>
<ul className="nav-menu">
    
    <Link to="/signup"><li>SignUp</li></Link>
    <Link to="/signin"><li>SignIn</li></Link>
    <Link to="/search"><li>Search </li></Link>
    <Link to="/explore"><li>Explore </li></Link>
    
    <Link to="createPost"><li>createPost</li></Link>
    <Link to="/profile"><li>Profile </li></Link>

</ul>
    </div>
  );
}
