import React from 'react'
import style from './navbar.module.css'
const FlipkartHeader = (props) => {
  console.log(props);
  return (
    <header id={style.header}>
        <article id={style.logo}>
            Logo
        </article>
        <article id={style.searchbar}>
            login and searchbar
        </article>

    </header>
  )
}

export default FlipkartHeader