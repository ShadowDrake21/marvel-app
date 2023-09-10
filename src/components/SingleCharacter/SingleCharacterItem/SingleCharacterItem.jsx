import React from 'react'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import SingleCharacterSlider from '../SingleCharacterSlider/SingleCharacterSlider'
import {
  fetchSingleCharacterSlider,
  fetchSingleCharacterSliderComics,
  fetchSingleCharacterSliderEvents,
  fetchSingleCharacterSliderSeries,
  fetchSingleCharacterSliderStories,
} from '../../../static/fetchingTypes'
import styles from './SingleCharacterItem.module.scss'

const SingleCharacterItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgPath} alt="img" />
        </div>
        <div className={styles.info}>
          <TitleUI text={element.name} />
          <p className={styles.text}>
            {element.description
              ? element.description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus natus facere quia tenetur maxime. Saepe debitis, possimus enim voluptatem veniam laudantium hic mollitia asperiores quas modi provident, nisi numquam quis architecto quasi ipsam! Provident itaque rem in nemo voluptatum nobis atque assumenda, aperiam quidem iure! '}
          </p>
          <SliderUI
            fetchingCriteria={fetchSingleCharacterSlider}
            sliderType={fetchSingleCharacterSliderComics}
          />
        </div>
      </div>
      <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleCharacterSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleCharacterSliderSeries}
        />
      </div>
      <div className={styles.bottom}>
        <SliderUI
          fetchingCriteria={fetchSingleCharacterSlider}
          sliderType={fetchSingleCharacterSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleCharacterItem
