import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './ComicsCard.module.scss'

const ComicsCard = ({ ...comics }) => {
  const { id, title, thumbnail } = comics
  return <SearchResultsCard id={id} name={title} thumbnail={thumbnail} />
}

export default ComicsCard
