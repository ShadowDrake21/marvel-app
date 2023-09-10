import React from 'react'
import { image_full } from '../../../services/imageSizes'
import styles from './SingleEventItem.module.scss'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderSeries,
  fetchSingleElementSliderStories,
  fetchSingleEventSlider,
} from '../../../static/fetchingTypes'

const SingleEventItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgPath} alt="img" />
        </div>
        <div className={styles.info}>
          <TitleUI text={element.title} />
          <p className={styles.text}>
            {element.description
              ? element.description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus natus facere quia tenetur maxime. Saepe debitis, possimus enim voluptatem veniam laudantium hic mollitia asperiores quas modi provident, nisi numquam quis architecto quasi ipsam! Provident itaque rem in nemo voluptatum nobis atque assumenda, aperiam quidem iure! '}
          </p>
          <SliderUI
            fetchingCriteria={fetchSingleEventSlider}
            sliderType={fetchSingleElementSliderComics}
          />
        </div>
      </div>
      <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleEventSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className={styles.bottom}>
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
