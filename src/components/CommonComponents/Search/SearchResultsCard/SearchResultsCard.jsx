import React from 'react'
import styles from './SearchResultsCard.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { image_full } from '../../../../services/imageSizes'

const SearchResultsCard = ({ id, name, thumbnail }) => {
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  const location = useLocation().pathname

  return (
    <Link className={styles.card} to={location + '/' + id}>
      <img className={styles.img} src={imgPath} alt="img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  )
}

export default SearchResultsCard
