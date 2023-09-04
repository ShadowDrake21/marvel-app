import React from 'react'
import cn from 'classnames'
import styles from './pagination.module.scss'

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  propClass = '',
}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className={cn(styles.pagination, propClass)}>
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
