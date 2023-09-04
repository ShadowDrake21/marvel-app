import React from 'react'
import Characters from '../../components/CharactersPage/Characters/Characters'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import styles from './CharactersPage.module.scss'

const CharactersPage = () => {
  return (
    <SearchMain
      title="Characters"
      placeholder="Enter a character's name"
      component={Characters}
    />
  )
}

export default CharactersPage
