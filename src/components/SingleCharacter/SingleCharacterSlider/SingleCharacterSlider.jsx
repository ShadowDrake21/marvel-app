import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetching } from '../../../services/fetching'
import {
  fetchSingleCharacterSlider,
  fetchSingleCharacterSliderComics,
} from '../../../static/fetchingTypes'
import { image_full } from '../../../services/imageSizes'
import styles from './SingleCharacterSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SingleCharacterSlider = ({ sliderType }) => {
  const [characterFeatures, setCharacterFeatures] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const { id } = useParams()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  useEffect(() => {
    fetching(
      fetchSingleCharacterSlider,
      setCharacterFeatures,
      setIsSuccess,
      null,
      id,
      sliderType
    )
  }, [id, sliderType])

  console.log(characterFeatures)

  return (
    <div className={styles.slider}>
      <h3 className={styles.title}>{sliderType}</h3>
      <Slider {...settings}>
        {characterFeatures.map((feature) => (
          <Link to="/" key={feature.id}>
            <img
              src={
                sliderType === fetchSingleCharacterSliderComics
                  ? feature.images[0].path +
                    '/' +
                    image_full +
                    '.' +
                    feature.images[0].extension
                  : feature.thumbnail.path +
                    '/' +
                    image_full +
                    '.' +
                    feature.thumbnail.extension
              }
              alt="img"
              className={styles.sliderImg}
            />
          </Link>
        ))}
      </Slider>
    </div>
  )
}

export default SingleCharacterSlider
