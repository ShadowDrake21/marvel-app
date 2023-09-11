import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { image_full } from '../../../../services/imageSizes'
import styles from './SearchResultsCard.module.scss'

const SearchResultsCard = ({ id, name, thumbnail, extraClass = '' }) => {
  const imgPath = !extraClass
    ? thumbnail.path + '/' + image_full + '.' + thumbnail.extension
    : thumbnail
  const location = useLocation().pathname

  return (
    <Link className={cn(styles.card, extraClass)} to={location + '/' + id}>
      <img className={styles.img} src={imgPath} alt="img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  )
}

export default SearchResultsCard
