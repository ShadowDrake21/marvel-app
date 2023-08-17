import React, { useState } from 'react'
import styles from './CharactersPage.module.scss'
import CharactersFetching from '../../components/CharactersPage/CharactersFetching/CharactersFetching'

const CharactersPage = () => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={styles.page}>
      <div>Input value: {value}</div>
      <input type="search" value={value} onChange={onChange} />
      {value && <CharactersFetching searchTerm={value} />}
    </div>
  )
}

export default CharactersPage
