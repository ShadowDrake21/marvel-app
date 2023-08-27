import React from 'react'
import styles from './HomePage.module.scss'
import CharactersPage from '../CharactersPage/CharactersPage'
import ChooseTheme from '../../components/HomePage/ChooseTheme'

const HomePage = () => {
  return (
    <div>
      <h1 className="page__title">Home Page</h1>
      <ChooseTheme />
    </div>
  )
}

export default HomePage
