import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__description}>
        © Made by{' '}
        <a
          className={styles.footer__link}
          href="https://github.com/ShadowDrake21"
          target="_blank"
          rel="noreferrer"
        >
          Dmytro "Drake" Krapyvianskyi
        </a>
      </p>
    </footer>
  )
}

export default Footer
