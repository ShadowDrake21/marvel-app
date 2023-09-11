import React from 'react'
import { useState } from 'react'
import TitleUI from '../../../UI/TitleUI/TitleUI'
import InputUI from '../../../UI/InputUI/InputUI'
import styles from './SearchMain.module.scss'

const SearchMain = ({ title, placeholder, component: Component }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clearSearch = () => {
    setValue('')
  }

  return (
    <div className="container">
      <TitleUI text={title} />
      {title !== 'Stories' && (
        <InputUI
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={clearSearch}
        />
      )}
      {(value || title === 'Stories') && <Component searchTerm={value} />}
    </div>
  )
}

export default SearchMain
