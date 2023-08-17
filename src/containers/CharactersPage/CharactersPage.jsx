import React from 'react'
import styles from './CharactersPage.module.scss'
import UISearch from '../../components/UI/UISearch'
import CharactersFetching from '../../components/CharactersPage/CharactersFetching/CharactersFetching'

const CharactersPage = () => {
  return (
    <div className={styles.page}>
      <UISearch />
      <CharactersFetching searchTerm="Tony" />
    </div>
  )
}

export default CharactersPage
