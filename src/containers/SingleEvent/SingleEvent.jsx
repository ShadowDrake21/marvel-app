import React from 'react'
import { useParams } from 'react-router-dom'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import { fetchSingleEvent } from '../../static/fetchingTypes'
import SingleEventItem from '../../components/SingleEvent/SingleEventItem/SingleEventItem'
import styles from './SingleEvent.module.scss'

const SingleEvent = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleEvent}
      component={SingleEventItem}
    />
  )
}

export default SingleEvent
