import React from 'react'
import SearchResultsCard from '../../CommonComponents/Search/SearchResultsCard/SearchResultsCard'
import styles from './EventCard.module.scss'

const EventCard = ({ ...event }) => {
  const { id, title, thumbnail } = event
  return <SearchResultsCard id={id} name={title} thumbnail={thumbnail} />
}

export default EventCard
