import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleComics } from '../../static/fetchingTypes'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import SingleComicsItem from '../../components/SingleComics/SingleComicsItem/SingleComicsItem'
import styles from './SingleComics.module.scss'

const SingleComics = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleComics}
      component={SingleComicsItem}
    />
  )
}

export default SingleComics
