import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <nav>

      <div className='mainNavSec'> 

        <div className='lagCur'>
          <span style={{ margin : "0.4rem" }} >EN</span>
          <span>$</span>
        </div>

        <div className='profile'>
          <span  style={{ margin : "0.4rem" }}> My profile </span>
          <span  style={{ margin : "0.4rem" }}> items </span>
          <span  style={{ margin : "0.4rem" }}> S </span>
        </div>

      </div>
      <hr />
      <div className='logo'>
      <h1>ESTORE</h1>
      </div>
      <ul>
        <li> <b>Home</b> </li>
        <li><b>Store</b></li>
        <li><b>Iphone</b></li>
        <li><b>Macbook</b></li>
        <li><b>Accesories</b></li> 
      </ul>
    </nav> 
    </>
  )
}

export default Nav