import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetching } from '../../../services/fetching'
import { RotatingLines } from 'react-loader-spinner'
import styles from './SingleElement.module.scss'

const SingleElement = ({ id, fetchCriteria, component: Component }) => {
  const [element, setElement] = useState({})
  const [loading, setLoading] = useState(false)
  console.log(element)

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
