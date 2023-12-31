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
  fetchSingleElementSliderCharacters,
  fetchSingleElementSliderCreators,
  fetchSingleElementSliderEvents,
  fetchSingleElementSliderStories,
} from '../../../static/fetchingTypes'
import { substituteText } from '../../../static/generatedText'

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
    <div className={cn(styles.item, 'singleElementItem')}>
      <div className={cn(styles.top, 'top')}>
        <div className={cn(styles.imgWrapper, 'imgWrapper')}>
          <img className={cn(styles.img, 'img')} src={imgPath} alt="img" />
        </div>
        <div className={cn(styles.info, 'info')}>
          <TitleUI text={element.title} />
          <p className={cn(styles.text, 'text')}>
            {element.description ? element.description : substituteText}
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
            sliderType={fetchSingleElementSliderCreators}
          />
        </div>
      </div>
      <div className="middle">
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleElementSliderCharacters}
        />
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleElementSliderEvents}
        />
      </div>
      <div className="bottom">
        <SliderUI
          fetchingCriteria={fetchSingleComicsSlider}
          sliderType={fetchSingleElementSliderStories}
        />
      </div>
    </div>
  )
}

export default SingleComicsItem
