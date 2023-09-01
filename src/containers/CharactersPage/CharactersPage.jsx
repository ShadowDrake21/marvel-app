import React, { useState } from 'react'
import InputUI from '../../components/UI/InputUI/InputUI'
import TitleUI from '../../components/UI/TitleUI/TitleUI'
import Characters from '../../components/CharactersPage/Characters/Characters'
import styles from './CharactersPage.module.scss'

const CharactersPage = () => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clearSearch = () => {
    setValue('')
  }

  return (
    <div className="container">
      <TitleUI text="Characters" />
      <InputUI
        value={value}
        placeholder="Enter a character's name"
        onChange={onChange}
        onClick={clearSearch}
      />
      {value && <Characters searchTerm={value} />}
    </div>
  )
}

export default CharactersPage
