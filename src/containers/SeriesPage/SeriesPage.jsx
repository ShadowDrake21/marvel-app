import React from 'react'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import Series from '../../components/SeriesPage/Series/Series'
import styles from './SeriesPage.module.scss'

const SeriesPage = () => {
  return (
    <SearchMain
      title="Series"
      placeholder="Enter a series title"
      component={Series}
    />
  )
}

export default SeriesPage
