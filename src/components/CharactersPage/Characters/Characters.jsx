import React from 'react'
import { fetchCharacters } from '../../../static/fetchingTypes'
import CharacterCard from '../CharacterCard/CharacterCard'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import styles from './Characters.module.scss'

const Characters = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchCharacters}
      searchTerm={searchTerm}
      component={CharacterCard}
    />
  )
}

export default Characters
