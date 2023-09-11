import React from 'react'
import SearchResults from '../../CommonComponents/Search/SearchResults/SearchResults'
import { fetchStories } from '../../../static/fetchingTypes'
import StoryCard from '../StoryCard/StoryCard'
import styles from './Story.module.scss'

const Story = ({ searchTerm }) => {
  return (
    <SearchResults
      fetchingCriteria={fetchStories}
      searchTerm={searchTerm}
      component={StoryCard}
    />
  )
}

export default Story
