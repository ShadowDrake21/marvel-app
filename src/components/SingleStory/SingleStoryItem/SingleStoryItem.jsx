import React from 'react'
import styles from './SingleStoryItem.module.scss'
import SliderUI from '../../UI/SliderUI/SliderUI'
import cn from 'classnames'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderSeries,
  fetchSingleStoriesSlider,
} from '../../../static/fetchingTypes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import { substituteText } from '../../../static/generatedText'

const SingleStoryItem = ({ element }) => {
  return (
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className={cn(styles.info, 'info')}>
          <TitleUI text={element.title} />
          <p className={'text'}>
            {element.description ? element.description : substituteText}
          </p>
          <div className={styles.info__item}>
            <SliderUI
              fetchingCriteria={fetchSingleStoriesSlider}
              sliderType={fetchSingleElementSliderComics}
            />
            <SliderUI
              fetchingCriteria={fetchSingleStoriesSlider}
              sliderType={fetchSingleElementSliderCharacters}
            />
          </div>
        </div>
      </div>
      <div className={cn(styles.middle, 'middle')}>
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className="bottom">
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderCreators}
        />
      </div>
    </div>
  )
}

export default SingleStoryItem
