import React from 'react'
import ChooseTheme from '../../components/HomePage/ChooseTheme'
import TitleUI from '../../components/UI/TitleUI/TitleUI'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <TitleUI text="Home Page" />
      <ChooseTheme />
    </div>
  )
}

export default HomePage
