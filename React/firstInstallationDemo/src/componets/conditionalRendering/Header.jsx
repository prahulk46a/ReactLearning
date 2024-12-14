import React, { Fragment } from 'react'
import style from './flipkart.module.css'
const Header = (props) => {
    console.log(props);
  return (
    <div id={style.nav}>
        <div id={style.logo}>
            <h1>Logo</h1>
        </div>
        <div id={style.menu}>
            <a href="#">Home</a>
            <a href="#">Menu</a>
            {
                props.data.isLoggedIn ? (
                    <a href="#" onClick={() => props.data.setIsLoggedIn(false)}>Logout</a>
                ) : (
                    <Fragment>
                        <a href="#" onClick={() => props.data.setIsLoggedIn(true)}>Login</a>
                        <a href="#" onClick={() => props.data.setIsLoggedIn(true)}>Signup</a>
                    </Fragment>
                )
            }
        </div>
    </div>

  )
}

export default Header;