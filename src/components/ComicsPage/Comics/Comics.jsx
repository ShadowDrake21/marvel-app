import React from 'react'
import styles from './Comics.module.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetching } from '../../../services/fetching'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchComics } from '../../../static/fetchingTypes'

const Comics = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchComics}
      searchTerm={searchTerm}
      component={<div></div>}
    />
  )
}

export default Comics
