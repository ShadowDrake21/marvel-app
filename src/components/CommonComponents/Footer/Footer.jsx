import React from 'react'
import styles from './Footer.module.scss'
import { socialLinks } from '../../../static/generatedText'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__description}>
        © Made by
        <a
          className={styles.footer__link}
          href="https://github.com/ShadowDrake21"
          target="_blank"
          rel="noreferrer"
        >
          Dmytro "Drake" Krapyvianskyi
        </a>
      </p>
      <ul className={styles.footer__list}>
        {socialLinks.map(({ id, icon, link }) => (
          <li key={id} className={styles.footer__links}>
            <a href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
