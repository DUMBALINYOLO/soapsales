import React from "react"
import "./Navbar.css"


const Navbar = ({ sticky }) => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? <h1>Hello Me</h1> : null}
      <h1> Stick Me</h1>
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">About</li>
      <li className="navbar--link-item">Blog</li>
    </ul>
  </nav>
)
export default Navbar;