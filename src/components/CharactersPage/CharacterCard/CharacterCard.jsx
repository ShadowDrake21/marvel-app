import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './characterCard.module.scss'

const CharacterCard = ({ ...character }) => {
  const { id, name, thumbnail } = character
  return <SearchResultsCard id={id} name={name} thumbnail={thumbnail} />
}

export default CharacterCard
