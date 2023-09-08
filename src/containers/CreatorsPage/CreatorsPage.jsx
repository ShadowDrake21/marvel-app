import React from 'react'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import Creator from '../../components/CreatorPage/Creator/Creator'
import styles from './CreatorsPage.module.scss'

const CreatorsPage = () => {
  return (
    <SearchMain
      title="Creators"
      placeholder="Enter a creator name"
      component={Creator}
    />
  )
}

export default CreatorsPage
