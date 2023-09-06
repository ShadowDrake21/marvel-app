import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetching } from '../../../services/fetching'
import {
  fetchSingleCharacterSlider,
  fetchSingleCharacterSliderComics,
} from '../../../static/fetchingTypes'
import { fetchSingleCharacterSliderStories as stories } from '../../../static/fetchingTypes'
import { image_full } from '../../../services/imageSizes'
import styles from './SingleCharacterSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import { RotatingLines } from 'react-loader-spinner'

const SingleCharacterSlider = ({ sliderType }) => {
  const [characterFeatures, setCharacterFeatures] = useState([])
  const [isSuccess, setIsSuccess] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
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
  }, [id, sliderType])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = characterFeatures.slice(firstPostIndex, lastPostIndex)

  const numberOfSlides = () => {
    if (characterFeatures.length >= 3) {
      return 3
    }
    if (characterFeatures.length === 2) {
      return 2
    }
    if (characterFeatures.length === 1) {
      return 1
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides(),
    slidesToScroll: 1,
  }

  return (
    <div className={styles.slider}>
      <h3 className={styles.title}>{sliderType}</h3>
      {characterFeatures.length > 0 && sliderType !== stories && (
        <Slider {...settings}>
          {characterFeatures.map((feature) => (
            <Link to="/" key={feature.id} className={styles.sliderItem}>
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
      )}
      <div className={styles.storiesWrapper}>
        {isSuccess &&
          sliderType === stories &&
          currentPosts.map((feature) => (
            <Link to="/" className={styles.storiesItem} key={feature.id}>
              {feature.title}
            </Link>
          ))}
      </div>
      {characterFeatures.length > postsPerPage && sliderType === stories && (
        <Pagination
          totalPosts={characterFeatures.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          propClass={styles.center}
        />
      )}

      {!characterFeatures.length && !isSuccess && (
        <div className="loader">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.85"
            width="76"
            visible={true}
          />
        </div>
      )}

      {!characterFeatures.length && isSuccess && (
        <p className={styles.emptySlider}>There is no {sliderType}</p>
      )}
    </div>
  )
}

export default SingleCharacterSlider
