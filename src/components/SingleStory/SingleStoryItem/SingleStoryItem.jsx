import React from 'react'
import styles from './SingleStoryItem.module.scss'
import SliderUI from '../../UI/SliderUI/SliderUI'
import {
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderComics,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderSeries,
  fetchSingleStoriesSlider,
} from '../../../static/fetchingTypes'
import TitleUI from '../../UI/TitleUI/TitleUI'

const SingleStoryItem = ({ element }) => {
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.info}>
          <TitleUI text={element.title} />
          <p className={styles.text}>
            {element.description
              ? element.description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus natus facere quia tenetur maxime. Saepe debitis, possimus enim voluptatem veniam laudantium hic mollitia asperiores quas modi provident, nisi numquam quis architecto quasi ipsam! Provident itaque rem in nemo voluptatum nobis atque assumenda, aperiam quidem iure! '}
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
      <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderSeries}
        />
      </div>
      <div className={styles.bottom}>
        <SliderUI
          fetchingCriteria={fetchSingleStoriesSlider}
          sliderType={fetchSingleElementSliderCreators}
        />
      </div>
    </div>
  )
}

export default SingleStoryItem
