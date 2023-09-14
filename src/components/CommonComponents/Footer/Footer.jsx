import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__description}>
        © Made by{' '}
        <a className={styles.footer__link} href="#">
          Dmytro "Drake" Krapyvianskyi
        </a>
      </p>
    </footer>
  )
}

export default Footer
