import MD5 from 'crypto-js/md5'
import {
  fetchSingleCharacter,
  fetchSingleComics,
  fetchSingleCreator,
  fetchSingleEvent,
  fetchSingleSeries,
} from '../static/fetchingTypes'

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

      // refactoring !!!
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

      if (sliderType === 'comics') {
        console.log(url)
      }
      break

    case 'comics':
      url = `${API_URL}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${searchTerm}`
      break

    case 'singleComics':
      url = `${API_URL}/v1/public/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'singleComicsSlider':
      url = `${API_URL}/v1/public/comics/${id}/`

      if (sliderType === 'creators') {
        url += 'creators'
      }

      if (sliderType === 'characters') {
        url += 'characters'
      }

      if (sliderType === 'events') {
        url += 'events'
      }

      if (sliderType === 'stories') {
        url += 'stories'
      }

      url += `?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'creators':
      url = `${API_URL}/v1/public/creators?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
      break

    case 'singleCreator':
      url = `${API_URL}/v1/public/creators/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'singleCreatorSlider':
      url = `${API_URL}/v1/public/creators/${id}/`

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

    case 'events':
      url = `${API_URL}/v1/public/events?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchTerm}`
      break

    case 'singleEvent':
      url = `${API_URL}/v1/public/events/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'singleEventSlider':
      url = `${API_URL}/v1/public/events/${id}/`

      if (sliderType === 'comics') {
        url += 'comics'
      }

      if (sliderType === 'characters') {
        url += 'characters'
      }

      if (sliderType === 'stories') {
        url += 'stories'
      }

      if (sliderType === 'series') {
        url += 'series'
      }

      if (sliderType === 'creators') {
        url += 'creators'
      }

      url += `?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      break

    case 'series':
      url = `${API_URL}/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${searchTerm}`
      break

    case 'singleSeries':
      url = `${API_URL}/v1/public/series/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
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
    // refactoring!!!
    if (
      type === fetchSingleCharacter ||
      type === fetchSingleComics ||
      type === fetchSingleCreator ||
      type === fetchSingleEvent ||
      type === fetchSingleSeries
    ) {
      setObject(...dataArr)
    } else {
      setObject(dataArr)
    }
    console.log(dataArr)
    setBoolean(true)
  } catch (err) {
    setBoolean('error')
    console.error(err)
    return
  }
}
