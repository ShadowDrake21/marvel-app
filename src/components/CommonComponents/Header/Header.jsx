import React from 'react'
import logo from '../../../assets/photos/logo.png'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="home" className={styles.logo__link}>
            <img src={logo} className={styles.logo} alt="logo" />
          </NavLink>
          <ul className={styles.list__container}>
            <li>
              <HeaderLink text="Home" path="home" />
            </li>
            <li>
              <HeaderLink text="Characters" path="characters" />
            </li>
            <li>
              <HeaderLink text="Comics" path="comics" />
            </li>
            <li>
              <HeaderLink text="Creators" path="creators" />
            </li>
            <li>
              <HeaderLink text="Events" path="events" />
            </li>
            <li>
              <HeaderLink text="Series" path="series" />
            </li>
            <li>
              <HeaderLink text="Stories" path="stories" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const HeaderLink = ({ text, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? `${styles.active}` : '')}
    >
      {text}
    </NavLink>
  )
}

export default Header
