import React from 'react'
import styles from './titleUI.module.scss'

const TitleUI = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>
}

export default TitleUI
