import React from 'react'
import { image_full } from '../../../services/imageSizes'
import styles from './SingleEventItem.module.scss'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import cn from 'classnames'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderSeries,
  fetchSingleElementSliderStories,
  fetchSingleEventSlider,
} from '../../../static/fetchingTypes'
import { substituteText } from '../../../static/generatedText'

const SingleEventItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className="imgWrapper">
          <img className="img" src={imgPath} alt="img" />
        </div>
        <div className={cn(styles.info, 'info')}>
          <TitleUI text={element.title} />
          <p className={'text'}>
            {element.description ? element.description : substituteText}
          </p>
          <SliderUI
            fetchingCriteria={fetchSingleEventSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className={cn(styles.middle, 'middle')}>
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className={cn(styles.bottom, 'bottom')}>
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderCreators}
        />
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleEventItem
