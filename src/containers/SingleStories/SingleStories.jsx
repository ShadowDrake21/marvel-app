import React from 'react'
import { useParams } from 'react-router-dom'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import { fetchSingleStory } from '../../static/fetchingTypes'
import SingleStoryItem from '../../components/SingleStory/SingleStoryItem/SingleStoryItem'
import styles from './SingleStories.module.scss'

const SingleStories = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleStory}
      component={SingleStoryItem}
    />
  )
}

export default SingleStories
