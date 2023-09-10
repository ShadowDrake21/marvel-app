import React from 'react'
import styles from './SingleSeriesItem.module.scss'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SliderUI from '../../UI/SliderUI/SliderUI'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderStories,
  fetchSingleStoriesSlider,
} from '../../../static/fetchingTypes'

const SingleSeriesItem = ({ element }) => {
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
          {/* <SliderUI
            fetchingCriteria={fetchSingleStoriesSlider}
            sliderType={fetchSingleElementSliderComics}
          /> */}
        </div>
      </div>
      {/* there is no image !!! */}
      {/* <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
      </div>
      <div className={styles.bottom}>
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderCreators}
        />
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div> */}
    </div>
  )
}

export default SingleSeriesItem
