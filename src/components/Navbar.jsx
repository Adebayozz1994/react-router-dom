import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/styles/style.css"
function Navbar() {
  return (
    <div>
      .
       <nav>
        <div className="div2">
          <ul>
            <li><Link to="#">Request a demo</Link></li>
            <li><Link>|</Link></li>
            <li><Link to="#">Log in</Link></li>
            <button className='btn'>Get Notion free</button>
          </ul>
        </div>

        <div className="div">
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            {/* <img src={bar} alt="" /> */}
          </label>
          <label className="logo">
            {/* <img src={logo} className='img' alt="" /> */}
          </label>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar