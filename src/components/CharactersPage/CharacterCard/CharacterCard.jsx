import React from 'react'
import { image_full } from '../../../services/imageSizes'
import styles from './characterCard.module.scss'

const CharacterCard = ({ ...character }) => {
  const { name, thumbnail } = character
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={styles.card}>
      <img className={styles.img} src={imgPath} alt="character_img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </div>
  )
}

export default CharacterCard
