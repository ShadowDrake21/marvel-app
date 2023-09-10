import React from 'react'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
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
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgPath} alt="img" />
        </div>
        <div className={styles.info}>
          <TitleUI text={element.fullName} />
          <SliderUI
            fetchingCriteria={fetchSingleCreatorSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className={styles.bottom}>
        <SliderUI
          fetchingCriteria={fetchSingleCreatorSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleCreatorItem
