import React from 'react'
import styles from './SingleCharacterItem.module.scss'
import { image_full } from '../../../services/imageSizes'
import TitleUI from '../../UI/TitleUI/TitleUI'
import SingleCharacterSlider from '../SingleCharacterSlider/SingleCharacterSlider'
import { fetchSingleCharacterSliderComics } from '../../../static/fetchingTypes'

const SingleCharacterItem = ({ character }) => {
  const { thumbnail } = character
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension
  return (
    <div className={styles.item}>
      <div className={styles.top}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgPath} alt="img" />
        </div>
        <div className={styles.info}>
          <TitleUI text={character.name} />
          <p className={styles.text}>
            {character.description
              ? character.description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, possimus natus facere quia tenetur maxime. Saepe debitis, possimus enim voluptatem veniam laudantium hic mollitia asperiores quas modi provident, nisi numquam quis architecto quasi ipsam! Provident itaque rem in nemo voluptatum nobis atque assumenda, aperiam quidem iure! '}
          </p>
          <SingleCharacterSlider
            sliderType={fetchSingleCharacterSliderComics}
          />
          <div className={styles.comics}>comics (slider?)</div>
          <div className={styles.series}>series (slider?)</div>
          <div className={styles.series}>stories (slider?)</div>
        </div>
      </div>
    </div>
  )
}

export default SingleCharacterItem
