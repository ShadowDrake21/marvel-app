import React from 'react'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import Story from '../../components/StoriesPage/Story/Story'
import styles from './StoriesPage.module.scss'

const StoriesPage = () => {
  return (
    <SearchMain
      title="Stories"
      placeholder="Enter a story title"
      component={Story}
    />
  )
}

export default StoriesPage
