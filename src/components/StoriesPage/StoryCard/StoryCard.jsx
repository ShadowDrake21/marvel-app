import React from 'react'
import storyWithoutImg from '../../../assets/photos/marvel-stories.jpeg'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './StoryCard.module.scss'

const StoryCard = ({ ...story }) => {
  const { id, title } = story
  return (
    <SearchResultsCard
      id={id}
      name={title}
      thumbnail={storyWithoutImg}
      extraClass={styles.newImageSize}
    />
  )
}

export default StoryCard
