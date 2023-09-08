import React from 'react'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchCreators } from '../../../static/fetchingTypes'
import CreatorCard from '../CreatorCard/CreatorCard'
import styles from './Creator.module.scss'

const Creator = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchCreators}
      searchTerm={searchTerm}
      component={CreatorCard}
    />
  )
}

export default Creator
