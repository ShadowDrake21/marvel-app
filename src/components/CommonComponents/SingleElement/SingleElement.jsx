import React from 'react'
import styles from './SingleElement.module.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetching } from '../../../services/fetching'
import { fetchSingleComics } from '../../../static/fetchingTypes'
import { RotatingLines } from 'react-loader-spinner'

const SingleElement = ({ id, fetchCriteria, component: Component }) => {
  const [element, setElement] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetching(fetchCriteria, setElement, setLoading, undefined, id)
  }, [id])
  return (
    <div>
      <div className="container">
        {!loading && (
          <div className="loader">
            <RotatingLines
              strokeColor="red"
              strokeWidth="5"
              animationDuration="0.75"
              width="76"
              visible={true}
            />
          </div>
        )}
        {loading && <Component element={element} />}
      </div>
    </div>
  )
}

export default SingleElement
