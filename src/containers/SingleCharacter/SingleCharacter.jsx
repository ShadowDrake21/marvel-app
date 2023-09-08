import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleCharacter } from '../../static/fetchingTypes'
import SingleElement from '../../components/CommonComponents/SingleElement/SingleElement'
import SingleCharacterItem from '../../components/SingleCharacter/SingleCharacterItem/SingleCharacterItem'
import styles from './SingleCharacter.module.scss'

const SingleCharacter = () => {
  const { id } = useParams()
  return (
    <SingleElement
      id={id}
      fetchCriteria={fetchSingleCharacter}
      component={SingleCharacterItem}
    />
  )
}

export default SingleCharacter
