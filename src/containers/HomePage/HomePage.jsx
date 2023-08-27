import React from 'react'
import styles from './HomePage.module.scss'
import ChooseTheme from '../../components/HomePage/ChooseTheme'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className="page__title">Home Page</h1>
      <ChooseTheme />
    </div>
  )
}

export default HomePage
