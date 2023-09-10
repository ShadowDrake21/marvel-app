import React from 'react'
import SearchMain from '../../components/CommonComponents/Search/SearchMain/SearchMain'
import Event from '../../components/EventsPage/Event/Event'
import styles from './EventsPage.module.scss'

const EventsPage = () => {
  return (
    <SearchMain
      title="Events"
      placeholder="Enter an event title"
      component={Event}
    />
  )
}

export default EventsPage
