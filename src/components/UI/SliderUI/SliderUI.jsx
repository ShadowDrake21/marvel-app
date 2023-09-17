import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetching } from '../../../services/fetching'
import Slider from 'react-slick'
import { image_full } from '../../../services/imageSizes'
import { fetchSingleElementSliderComics } from '../../../static/fetchingTypes'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import { RotatingLines } from 'react-loader-spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './SliderUI.module.scss'

const SliderUI = ({ fetchingCriteria, sliderType }) => {
  const [objects, setObjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const { id } = useParams()

  useEffect(() => {
    fetching(fetchingCriteria, setObjects, setLoading, null, id, sliderType)
  }, [id, sliderType, fetchingCriteria])

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = objects.slice(firstPostIndex, lastPostIndex)

  const numberOfSlides = () => {
    if (objects.length >= 3) {
      return 3
    }
    if (objects.length === 2) {
      return 2
    }
    if (objects.length === 1) {
      return 1
    }
  }

  const formLink = (sliderType, id) => {
    return sliderType + '/' + id
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides(),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: objects.length >= 2 ? 2 : 1,
          slidesToScroll: objects.length >= 2 ? 2 : 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={styles.slider}>
      <h3 className={styles.title}>{sliderType}</h3>
      {objects.length > 0 && sliderType !== 'stories' && (
        <Slider {...settings}>
          {objects.map((object) => (
            <Link
              to={'/' + formLink(sliderType, object.id)}
              key={object.id}
              className={styles.sliderItem}
            >
              <img
                src={
                  sliderType === fetchSingleElementSliderComics &&
                  object.images.length > 0
                    ? object.images[0].path +
                      '/' +
                      image_full +
                      '.' +
                      object.images[0].extension
                    : object.thumbnail.path +
                      '/' +
                      image_full +
                      '.' +
                      object.thumbnail.extension
                }
                alt="img"
                className={styles.sliderImg}
              />
            </Link>
          ))}
        </Slider>
      )}
      {sliderType === 'stories' && (
        <div className={styles.storiesWrapper}>
          {loading &&
            currentPosts.map((object) => (
              <Link
                to={'/' + formLink(sliderType, object.id)}
                className={styles.storiesItem}
                key={object.id}
              >
                {object.title || 'Unknown story'}
              </Link>
            ))}
        </div>
      )}
      {objects.length > postsPerPage && sliderType === 'stories' && (
        <Pagination
          totalPosts={objects.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          propClass={styles.center}
        />
      )}

      {!objects.length && !loading && (
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

      {!objects.length && loading && (
        <p className={styles.emptySlider}>There is no {sliderType}</p>
      )}
    </div>
  )
}

export default SliderUI
