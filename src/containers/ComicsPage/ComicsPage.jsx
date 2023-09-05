import React from 'react'
import Comics from '../../components/ComicsPage/Comics/Comics'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import styles from './ComicsPage.module.scss'

const ComicsPage = () => {
  return (
    <SearchMain
      title="Comics"
      placeholder="Enter a comics title"
      component={Comics}
    />
  )
}

export default ComicsPage
