import React from 'react'
import { useParams } from 'react-router-dom'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import { fetchSingleSeries } from '../../static/fetchingTypes'
import SingleSeriesItem from '../../components/SingleSeries/SingleSeriesItem/SingleSeriesItem'
import styles from './SingleSeries.module.scss'

const SingleSeries = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleSeries}
      component={SingleSeriesItem}
    />
  )
}

export default SingleSeries
