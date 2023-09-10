import React from 'react'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchSeries } from '../../../static/fetchingTypes'
import SeriesCard from '../SeriesCard/SeriesCard'
import styles from './Series.module.scss'

const Series = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchSeries}
      searchTerm={searchTerm}
      component={SeriesCard}
    />
  )
}

export default Series
