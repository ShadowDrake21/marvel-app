import React from 'react'
import styles from './SingleSeriesItem.module.scss'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import cn from 'classnames'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderStories,
  fetchSingleSeriesSlider,
} from '../../../static/fetchingTypes'
import { substituteText } from '../../../static/generatedText'

const SingleSeriesItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className="imgWrapper">
          <img className="img" src={imgPath} alt="img" />
        </div>
        <div className="info">
          <TitleUI text={element.title} />
          <p className="text">
            {element.description ? element.description : substituteText}
          </p>
          <SliderUI
            fetchingCriteria={fetchSingleSeriesSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className="middle">
        <SliderUI
          fetchingCriteria={fetchSingleSeriesSlider}
          sliderType={fetchSingleElementSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleSeriesSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
      </div>
      <div className={cn(styles.bottom, 'bottom')}>
        <SliderUI
          fetchingCriteria={fetchSingleSeriesSlider}
          sliderType={fetchSingleElementSliderCreators}
        />
        <SliderUI
          fetchingCriteria={fetchSingleSeriesSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleSeriesItem
