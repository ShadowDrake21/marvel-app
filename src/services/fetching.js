import MD5 from 'crypto-js/md5'
import {
  fetchSingleCharacter,
  fetchSingleComics,
  fetchSingleCreator,
  fetchSingleEvent,
  fetchSingleSeries,
  fetchSingleStory,
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

  const elementUrl = (elementType, criteria) => {
    return `${API_URL}/v1/public/${elementType}?ts=${ts}&apikey=${publicKey}&hash=${hash}&${criteria}`
  }

  const singleElementUrl = (elementType) => {
    return `${API_URL}/v1/public/${elementType}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  }

  const singleElementSliderUrl = (elementType) => {
    return `${API_URL}/v1/public/${elementType}/${id}/${sliderType}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  }

  switch (String(type)) {
    case 'characters':
      url = elementUrl('characters', `nameStartsWith=${searchTerm}`)
      break

    case 'singleCharacter':
      url = singleElementUrl('characters')
      break

    case 'singleCharacterSlider':
      url = singleElementSliderUrl('characters')
      break

    case 'comics':
      url = elementUrl('comics', `titleStartsWith=${searchTerm}`)
      break

    case 'singleComics':
      url = singleElementUrl('comics')
      break

    case 'singleComicsSlider':
      url = singleElementSliderUrl('comics')
      break

    case 'creators':
      url = elementUrl('creators', `nameStartsWith=${searchTerm}`)
      break

    case 'singleCreator':
      url = singleElementUrl('creators')
      break

    case 'singleCreatorSlider':
      url = singleElementSliderUrl('creators')
      break

    case 'events':
      url = elementUrl('events', `nameStartsWith=${searchTerm}`)
      break

    case 'singleEvent':
      url = singleElementUrl('events')
      break

    case 'singleEventSlider':
      url = singleElementSliderUrl('events')
      break

    case 'series':
      url = elementUrl('series', `titleStartsWith=${searchTerm}`)
      break

    case 'singleSeries':
      url = singleElementUrl('series')
      break

    case 'singleSeriesSlider':
      url = singleElementSliderUrl('series')
      break

    case 'stories':
      url = elementUrl('stories', `limit=100`)
      break

    case 'singleStory':
      url = singleElementUrl('stories')
      break

    case 'singleStoriesSlider':
      url = singleElementSliderUrl('stories')
      break

    default:
      break
  }

  return url
}

const typeChecking = (type) => {
  const typesArr = [
    fetchSingleCharacter,
    fetchSingleComics,
    fetchSingleCreator,
    fetchSingleEvent,
    fetchSingleSeries,
    fetchSingleStory,
  ]

  for (let typeArr of typesArr) {
    if (typeArr === type) {
      return true
    }
  }

  return false
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
    if (typeChecking(type)) {
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
