import React from 'react'
import styles from './Header.module.scss'
import logo from '../../../assets/photos/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="/" className={styles.logo__link}>
            <img src={logo} className={styles.logo} alt="logo" />
          </NavLink>
          <ul className={styles.list__container}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="characters">Characters</NavLink>
            </li>
            <li>
              <NavLink to="/">Comics</NavLink>
            </li>
            <li>
              <NavLink to="/">Creators</NavLink>
            </li>
            <li>
              <NavLink to="/">Events</NavLink>
            </li>
            <li>
              <NavLink to="/">Series</NavLink>
            </li>
            <li>
              <NavLink to="/">Stories</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
