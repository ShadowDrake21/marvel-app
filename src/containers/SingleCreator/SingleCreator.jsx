import React from 'react'
import { useParams } from 'react-router-dom'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import { fetchSingleCreator } from '../../static/fetchingTypes'
import SingleCreatorItem from '../../components/SingleCreator/SingleCreatorItem/SingleCreatorItem'
import styles from './SingleCreator.module.scss'

const SingleCreator = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleCreator}
      component={SingleCreatorItem}
    />
  )
}

export default SingleCreator
