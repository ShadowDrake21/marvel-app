import React from 'react'
import TitleUI from '../../UI/TitleUI/TitleUI'
import { image_full } from '../../../services/imageSizes'
import cn from 'classnames'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import styles from './SingleComicsItem.module.scss'

dayjs.extend(relativeTime)

const SingleComicsItem = ({ element }) => {
  const { thumbnail } = element
  console.log(element)
  const imgPath = thumbnail.path + '/' + image_full + '.' + thumbnail.extension

  const dateExtracting = (date) => {
    return new Date(
      parseInt(date.slice(0, 4)),
      parseInt(date.slice(5, 7)) - 1,
      parseInt(date.slice(8, 10))
    )
  }

  const dateShortFormatting = (date) => {
    return dayjs(date).format('MM/DD/YYYY')
  }

  const dateRelativeFormatting = (date) => {
    return dayjs(date).fromNow()
  }

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
                <span>{element.format}</span>
              </p>
              <p className={styles.pageCount}>
                page count:
                <span>{element.pageCount}</span>
              </p>
            </div>
            <div className={cn(styles.detailsDates, styles.detailsItem)}>
              <p className={styles.dataOnSale}>
                onsale date:
                <span>
                  {dateShortFormatting(dateExtracting(element.dates[0].date))}
                  {', '}
                  {dateRelativeFormatting(
                    dateExtracting(element.dates[0].date)
                  )}
                </span>
              </p>
              <p className={styles.dataDigitalPurchase}>
                digital purchase date:
                <span>
                  {dateShortFormatting(dateExtracting(element.dates[3].date))}
                  {', '}
                  {dateRelativeFormatting(
                    dateExtracting(element.dates[3].date)
                  )}
                </span>
              </p>
            </div>
            <div className={cn(styles.links, styles.detailsItem)}>
              <a className={styles.detailsLink} href={element.urls[0].url}>
                details
              </a>
              <a className={styles.purchaseLink} href={element.urls[1].url}>
                purchase
              </a>
              <a className={styles.readerLink} href={element.urls[2].url}>
                reader
              </a>
            </div>
          </div>
          {/* <SingleCharacterSlider
            sliderType={fetchSingleCharacterSliderComics}
          /> */}
        </div>
      </div>
      {/* <div className={styles.middle}>
        <SingleCharacterSlider sliderType={fetchSingleCharacterSliderEvents} />
        <SingleCharacterSlider sliderType={fetchSingleCharacterSliderSeries} />
      </div>
      <div className={styles.bottom}>
        <SingleCharacterSlider sliderType={fetchSingleCharacterSliderStories} />
      </div> */}
    </div>
  )
}

export default SingleComicsItem
