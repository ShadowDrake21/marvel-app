import React from 'react'
import styles from './pagination.module.scss'

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
    pages.push(i)
  }

  console.log(Number(postsPerPage))

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? `${styles.paginationBtn} ${styles.paginationBtnActive}`
                : `${styles.paginationBtn}`
            }
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
