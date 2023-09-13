import React from 'react'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import {
  fetchSingleCharacterSlider,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderSeries,
  fetchSingleElementSliderStories,
} from '../../../static/fetchingTypes'
import { substituteText } from '../../../static/generatedText'
import cn from 'classnames'
import styles from './SingleCharacterItem.module.scss'

const SingleCharacterItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className="imgWrapper">
          <img className="img" src={imgPath} alt="img" />
        </div>
        <div className="info">
          <TitleUI text={element.name} />
          <p className="text">
            {element.description ? element.description : substituteText}
          </p>
          <SliderUI
            fetchingCriteria={fetchSingleCharacterSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className="middle">
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className="bottom">
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleCharacterItem
