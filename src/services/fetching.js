import MD5 from 'crypto-js/md5'

const API_URL = process.env.REACT_APP_BASE_URL

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString()
}

const putUrl = (type, searchTerm, id) => {
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
    default:
      break
  }

  return url
}

export const fetching = async (
  type,
  setObject,
  setBoolean,
  searchTerm = null,
  id = null
) => {
  try {
    const url = putUrl(type, searchTerm, id)
    const response = await fetch(url)
    const dataObj = await response.json()
    const dataArr = dataObj.data.results
    setObject(dataArr)
    setBoolean(true)
  } catch (err) {
    return
  }
}
