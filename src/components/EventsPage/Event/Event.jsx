import React from 'react'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchEvents } from '../../../static/fetchingTypes'
import EventCard from '../EventCard/EventCard'
import styles from './Event.module.scss'

const Event = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchEvents}
      searchTerm={searchTerm}
      component={EventCard}
    />
  )
}

export default Event
