import React from 'react'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchComics } from '../../../static/fetchingTypes'
import ComicsCard from '../ComicsCard/ComicsCard'
import styles from './Comics.module.scss'

const Comics = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchComics}
      searchTerm={searchTerm}
      component={ComicsCard}
    />
  )
}

export default Comics
