import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './SeriesCard.module.scss'

const SeriesCard = ({ ...series }) => {
  const { id, title, thumbnail } = series
  return <SearchResultsCard id={id} name={title} thumbnail={thumbnail} />
}

export default SeriesCard
