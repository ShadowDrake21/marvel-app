import React, { useEffect, useState } from 'react'
import MD5 from 'crypto-js/md5'
import styles from './HomePage.module.scss'

const API_URL = process.env.REACT_APP_BASE_URL

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString()
}

const HomePage = () => {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    let characterUrl = `${API_URL}/v1/public/characters`

    const ts = Date.now().toString()
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    const hash = getHash(ts, privateKey, publicKey)

    console.log(ts, hash)

    const url = `${characterUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=Scarlet`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setCharacters(data)
      console.log(characters)
    } catch (err) {
      console.error(err)
      return
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  console.log(characters)
  return <div className={styles.div}></div>
}

export default HomePage
