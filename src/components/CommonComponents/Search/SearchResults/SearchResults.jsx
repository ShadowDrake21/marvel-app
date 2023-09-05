import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetching } from '../../../../services/fetching'
import styles from './SearchResults.module.scss'
import Pagination from '../../Pagination/Pagination'

const SearchResults = ({
  fetchingCriteria,
  searchTerm,
  component: Component,
}) => {
  const [objects, setObjects] = useState([])
  const [isSuccess, setIsSuccess] = useState(true)
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
      {!isSuccess && (
        <p className="fetchError">
          There was an error while fetching a data. Try one more time
        </p>
      )}
      {isSuccess &&
        currentPosts.map((character) => (
          <Component key={character.id} {...character} />
        ))}
      {objects.length === 0 && isSuccess && (
        <p className={styles.fetchError}>No results. Try another query</p>
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
