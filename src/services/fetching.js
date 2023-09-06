import MD5 from 'crypto-js/md5'
import { fetchSingleCharacter } from '../static/fetchingTypes'

const API_URL = process.env.REACT_APP_BASE_URL

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString()
}

const putUrl = (type, searchTerm, id, sliderType = null) => {
  const ts = Date.now().toString()
  const publicKey = process.env.REACT_APP_API_KEY
  const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
  const hash = getHash(ts, privateKey, publicKey)

  let url

  switch (String(type)) {
    case 'characters':
      url = `${API_URL}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
      break
    case 'singleCharacter':
      url = `${API_URL}/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'singleCharacterSlider':
      url = `${API_URL}/v1/public/characters/${id}/`

      if (sliderType === 'comics') {
        url += 'comics'
      }
      if (sliderType === 'events') {
        url += 'events'
      }
      if (sliderType === 'stories') {
        url += 'stories'
      }
      if (sliderType === 'series') {
        url += 'series'
      }

      url += `?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'comics':
      url = `${API_URL}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${searchTerm}`
      break

    case 'singleComics':
      url = `${API_URL}/v1/public/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    default:
      break
  }

  return url
}

export const fetching = async (
  type,
  setObject,
  setBoolean,
  searchTerm,
  id,
  sliderType = null
) => {
  try {
    const url = putUrl(type, searchTerm, id, sliderType)
    const response = await fetch(url)
    const dataObj = await response.json()
    const dataArr = dataObj.data.results
    if (type === fetchSingleCharacter) {
      setObject(...dataArr)
    } else {
      setObject(dataArr)
    }
    setBoolean(true)
  } catch (err) {
    setBoolean('error')
    console.error(err)
    return
  }
}
