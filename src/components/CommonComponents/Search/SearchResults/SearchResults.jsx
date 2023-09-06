import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetching } from '../../../../services/fetching'
import styles from './SearchResults.module.scss'
import Pagination from '../../Pagination/Pagination'
import { ProgressBar, RotatingLines } from 'react-loader-spinner'

const SearchResults = ({
  fetchingCriteria,
  searchTerm,
  component: Component,
}) => {
  const [objects, setObjects] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    fetching(fetchingCriteria, setObjects, setIsSuccess, searchTerm)
  }, [fetchingCriteria, searchTerm])

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = objects.slice(firstPostIndex, lastPostIndex)

  console.log(objects)

  return (
    <div className={styles.cards}>
      {!isSuccess && objects.length === 0 && (
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          width="76"
          visible={true}
        />
      )}
      {isSuccess &&
        currentPosts.map((character) => (
          <Component key={character.id} {...character} />
        ))}
      {objects.length === 0 && isSuccess === true && (
        <p className={styles.fetchError}>No results. Try another query</p>
      )}
      {isSuccess === 'error' && (
        <p className="fetchError">ERROR: Failed to fetch. Try one more time</p>
      )}
      {objects.length > 10 && (
        <Pagination
          totalPosts={objects.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  )
}

export default SearchResults
