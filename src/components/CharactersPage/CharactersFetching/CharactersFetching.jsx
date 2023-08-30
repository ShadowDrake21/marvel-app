import React, { useEffect, useState } from 'react'
import MD5 from 'crypto-js/md5'
import styles from './CharactersFetching.module.scss'
import CharacterCard from '../CharacterCard/CharacterCard'

const API_URL = process.env.REACT_APP_BASE_URL

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString()
}

const CharactersFetching = ({ searchTerm }) => {
  const [characters, setCharacters] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const fetchCharacters = async () => {
    let characterUrl = `${API_URL}/v1/public/characters`

    const ts = Date.now().toString()
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    const hash = getHash(ts, privateKey, publicKey)

    const url = `${characterUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`

    try {
      const response = await fetch(url)
      const dataObj = await response.json()
      const dataArr = dataObj.data.results
      setCharacters(dataArr)
      setIsSuccess(true)
    } catch (err) {
      console.error(err)
      return
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [searchTerm])

  console.log(characters, searchTerm)
  return (
    <div className={styles.cards}>
      {!isSuccess && (
        <p className={styles.fetchError}>
          There was an error while fetching a data. Try one more time
        </p>
      )}
      {isSuccess &&
        characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
    </div>
  )
}

export default CharactersFetching
