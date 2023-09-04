import React from 'react'
import { image_full } from '../../../services/imageSizes'
import styles from './characterCard.module.scss'
import { Link, useLocation } from 'react-router-dom'

const CharacterCard = ({ ...character }) => {
  const { id, name, thumbnail } = character
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  const location = useLocation().pathname
  return (
    <Link className={styles.card} to={location + '/' + id}>
      <img className={styles.img} src={imgPath} alt="character_img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  )
}

// РЕФАКТОРИНГ
export default CharacterCard
