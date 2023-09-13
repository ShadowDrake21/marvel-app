import React from 'react'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import cn from 'classnames'
import {
  fetchSingleCreatorSlider,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderSeries,
  fetchSingleElementSliderStories,
} from '../../../static/fetchingTypes'
import styles from './SingleCreatorItem.module.scss'

const SingleCreatorItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className="imgWrapper">
          <img className="img" src={imgPath} alt="img" />
        </div>
        <div className="info">
          <TitleUI text={element.fullName} />
          <SliderUI
            fetchingCriteria={fetchSingleCreatorSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className="middle">
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className="bottom">
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleCreatorItem
