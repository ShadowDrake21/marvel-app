import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetching } from '../../services/fetching'
import { fetchSingleCharacter } from '../../static/fetchingTypes'
import TitleUI from '../../components/UI/TitleUI/TitleUI'
import styles from './SingleCharacter.module.scss'

const SingleCharacter = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    fetching(fetchSingleCharacter, setCharacter, setIsSuccess, undefined, id)
  }, [id])
  return (
    <div className="container">
      <TitleUI text={character.name} />
      {!isSuccess && (
        <p className={styles.fetchError}>
          There was an error while fetching a data. Try one more time
        </p>
      )}
    </div>
  )
}

export default SingleCharacter
