import React, { useEffect, useState } from 'react'
import styles from './Characters.module.scss'
import CharacterCard from '../CharacterCard/CharacterCard'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import { fetching } from '../../../services/fetching'
import { fetchCharacters } from '../../../static/fetchingTypes'

const Characters = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)

  useEffect(() => {
    fetching(fetchCharacters, setCharacters, setIsSuccess, searchTerm)
  }, [searchTerm])

  const lastPostIndex = currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPosts = characters.slice(firstPostIndex, lastPostIndex)

  console.log(characters, postPerPage)
  return (
    <div className={styles.cards}>
      {!isSuccess && (
        <p className="fetchError">
          There was an error while fetching a data. Try one more time
        </p>
      )}
      {isSuccess &&
        currentPosts.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      {characters.length === 0 && (
        <p className={styles.fetchError}>No results. Try another query</p>
      )}
      {characters.length > 10 && (
        <Pagination
          totalPosts={characters.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  )
}

export default Characters
