import React from 'react'

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

  console.log(postsPerPage)

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? 'active' : ''}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
