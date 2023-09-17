import React from 'react'
import logo from '../../../assets/photos/logo.png'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { useState } from 'react'
import { links } from '../../../static/generatedText'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <NavLink to="home" className={styles.logo__link}>
            <img src={logo} className={styles.logo} alt="logo" />
          </NavLink>
          <ul className={styles.list__container}>
            {links.map(({ id, title, path }) => (
              <li key={id}>
                <HeaderLink text={title} path={path} />
              </li>
            ))}
          </ul>
          <div className={styles.menu__btn} onClick={() => setNav(!nav)}>
            {nav ? (
              <CloseIcon
                sx={{ fontSize: 40 }}
                className={styles.menu__active}
              />
            ) : (
              <MenuIcon sx={{ fontSize: 40 }} />
            )}
          </div>
          {nav && (
            <ul className={styles.menu__adaptive}>
              {links.map(({ id, title, path }) => (
                <li key={id}>
                  <HeaderLink
                    text={title}
                    path={path}
                    onClick={() => setNav(!nav)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

const HeaderLink = ({ text, path, onClick = null }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? `${styles.active}` : '')}
      onClick={onClick}
    >
      {text}
    </NavLink>
  )
}

export default Header
