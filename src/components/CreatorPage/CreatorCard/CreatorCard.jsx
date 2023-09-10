import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './CreatorCard.module.scss'

const CreatorCard = ({ ...creator }) => {
  const { id, fullName, thumbnail } = creator
  return <SearchResultsCard id={id} name={fullName} thumbnail={thumbnail} />
}

export default CreatorCard
