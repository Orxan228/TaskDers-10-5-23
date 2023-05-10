import React from 'react'
import "./Header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="header___nav">
      <div className="header___nav___inner">
        <div className="header___nav___inner___left">
            <div className="header___nav___inner___left___logo">
              <img src="https://preview.colorlib.com/theme/ithost/img/logo.png.webp" alt="" />
            </div>
        </div>
        <div className="header___nav___inner___right">
          <ul className="header___nav___inner___right--list">
            <li className="header___nav___inner___right--list--item"><a href="#">Home</a></li>
            <li className="header___nav___inner___right--list--item"><a href="#">About Us</a></li>
            <li className="header___nav___inner___right--list--item"><a href="#">Service</a></li>
            <li className="header___nav___inner___right--list--item"><a href="#">News</a></li>
            <li className="header___nav___inner___right--list--item"><a href="#">Contact</a></li>
            <li className="header___nav___inner___right--list--item login-reg"><a href="#">Login/Register</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="header___offers">
        <div className="header___offers___wrapper">
          <div className="header___offers___wrapper___left">
              <p className="header___offers___wrapper___left--p1">Unbeatable Offers</p>
              <p className="header___offers___wrapper___left--p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
              <p className="header___offers___wrapper___left--p3">Get You Plan</p>
          </div>
          <div className="header___offers___wrapper___right">
            <div className="header___offers___wrapper___right--img">
              <img src="https://preview.colorlib.com/theme/ithost/img/rocket.png.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header