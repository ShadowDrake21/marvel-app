import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './CreatorCard.module.scss'

const CreatorCard = ({ ...creator }) => {
  const { id, firstName, lastName, thumbnail } = creator
  const name = lastName ? `${firstName} ${lastName}` : `${firstName}`
  return <SearchResultsCard id={id} name={name} thumbnail={thumbnail} />
}

export default CreatorCard
