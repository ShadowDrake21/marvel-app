import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetching } from '../../../services/fetching'
import { fetchSingleCharacterSlider } from '../../../static/fetchingTypes'
import { register } from 'swiper/element/bundle'
import { image_full } from '../../../services/imageSizes'
import styles from './SingleCharacterSlider.module.scss'

register()

const SingleCharacterSlider = ({ sliderType }) => {
  const swiperElRef = useRef(null)
  const [characterFeatures, setCharacterFeatures] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetching(
      fetchSingleCharacterSlider,
      setCharacterFeatures,
      setIsSuccess,
      null,
      id,
      sliderType
    )

    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail
      console.log(progress)
    })

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed')
    })
  }, [])

  console.log(characterFeatures)

  return (
    <div>
      <h3 className={styles.title}>{sliderType}</h3>
      <swiper-container ref={swiperElRef} slides-per-view="3" pagination="true">
        {characterFeatures.map((feature) => (
          <swiper-slide key={feature.id}>
            <Link to="/">
              <img
                src={
                  feature.images[0].path +
                  '/' +
                  image_full +
                  '.' +
                  feature.images[0].extension
                }
                alt="img"
                className={styles.sliderImg}
              />
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default SingleCharacterSlider
