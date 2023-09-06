import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetching } from '../../services/fetching'
import { fetchSingleComics } from '../../static/fetchingTypes'
import { RotatingLines } from 'react-loader-spinner'
import SingleComicsItem from '../../components/SingleComics/SingleComicsItem/SingleComicsItem'
import styles from './SingleComics.module.scss'

const SingleComics = () => {
  const { id } = useParams()
  const [comics, setComics] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetching(fetchSingleComics, setComics, setLoading, undefined, id)
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
        {loading && <SingleComicsItem comics={comics} />}
      </div>
    </div>
  )
}

export default SingleComics
