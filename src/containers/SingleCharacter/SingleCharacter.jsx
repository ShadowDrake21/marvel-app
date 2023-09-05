import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetching } from '../../services/fetching'
import { fetchSingleCharacter } from '../../static/fetchingTypes'
import SingleCharacterItem from '../../components/SingleCharacter/SingleCharacterItem/SingleCharacterItem'
import styles from './SingleCharacter.module.scss'

const SingleCharacter = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetching(fetchSingleCharacter, setCharacter, setLoading, undefined, id)
  }, [id])
  return (
    <div className="container">
      {!loading && <p className="fetchError">Loading...</p>}
      {loading && <SingleCharacterItem character={character} />}
    </div>
  )
}

export default SingleCharacter
