import React from 'react'
import styles from './inputUI.module.scss'

const InputUI = ({ value, placeholder, onChange, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <span className={styles.clearField} onClick={onClick}>
        Clear
      </span>
    </div>
  )
}

export default InputUI
