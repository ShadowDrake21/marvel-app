import React from 'react'
import TitleUI from '../../UI/TitleUI/TitleUI'
import { image_full } from '../../../services/imageSizes'
import cn from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import styles from './SingleComicsItem.module.scss'
import SliderUI from '../../UI/SliderUI/SliderUI'
import {
  fetchSingleComicsSlider,
  fetchSingleComicsSliderCharacters,
  fetchSingleComicsSliderCreators,
  fetchSingleComicsSliderEvents,
  fetchSingleComicsSliderSeries,
  fetchSingleComicsSliderStories,
} from '../../../static/fetchingTypes'

dayjs.extend(relativeTime)

const LinkComics = ({ url, text }) => {
  return (
    <a
      className={url || styles.disabled}
      href={url || '#'}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  )
}

const SingleComicsItem = ({ element }) => {
  const { thumbnail } = element
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension

  const dateExtracting = (date) => {
    return date
      ? new Date(
          parseInt(date.slice(0, 4)),
          parseInt(date.slice(5, 7)) - 1,
          parseInt(date.slice(8, 10))
        )
      : false
  }

  const dateShortFormatting = (date) => {
    return date ? dayjs(date).format('MM/DD/YYYY') : 'Unknown date'
  }

  const dateRelativeFormatting = (date) => {
    return date ? dayjs(date).fromNow() : 'Unknown date'
  }

  // date checking
  const findRequiredProperty = (requiredProperty, object) => {
    for (const [key, value] of Object.entries(object)) {
      const key = Object.keys(value)[1]
      if (value.type === requiredProperty) {
        return value[key]
      }
    }
    return false
  }

  const onSaleDate = findRequiredProperty('onsaleDate', element.dates)
  const digitalPurchaseDate = findRequiredProperty(
    'digitalPurchaseDate',
    element.dates
  )

  const detailUrl = findRequiredProperty('detail', element.urls)
  const purchaseUrl = findRequiredProperty('purchase', element.urls)
  const readerUrl = findRequiredProperty('reader', element.urls)

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
          <div className={styles.details}>
            <div className={cn(styles.editionDetail, styles.detailsItem)}>
              <p className={styles.format}>
                format:
                <span>{element.format || 'Unknown'}</span>
              </p>
              <p className={styles.pageCount}>
                page count:
                <span>{element.pageCount || 'Unknown'}</span>
              </p>
            </div>
            <div className={cn(styles.detailsDates, styles.detailsItem)}>
              <p className={styles.dataOnSale}>
                onsale date:
                <span>
                  {dateShortFormatting(dateExtracting(onSaleDate))}
                  {onSaleDate &&
                    ', ' + dateRelativeFormatting(dateExtracting(onSaleDate))}
                </span>
              </p>
              <p className={styles.dataDigitalPurchase}>
                digital purchase date:
                <span>
                  {dateShortFormatting(digitalPurchaseDate)}

                  {digitalPurchaseDate &&
                    ', ' +
                      dateRelativeFormatting(
                        dateExtracting(digitalPurchaseDate)
                      )}
                </span>
              </p>
            </div>
            <div className={cn(styles.links, styles.detailsItem)}>
              <LinkComics url={detailUrl} text="details" />

              <LinkComics url={purchaseUrl} text="purchase" />

              <LinkComics url={readerUrl} text="reader" />
            </div>
          </div>
          <SliderUI
            fetchingCriteria={fetchSingleComicsSlider}
            sliderType={fetchSingleComicsSliderCreators}
          />
        </div>
      </div>
      <div className={styles.middle}>
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleComicsSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleComicsSliderEvents}
        />
      </div>
      <div className={styles.bottom}>
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleComicsSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleComicsItem
