import React from 'react'
import cn from 'classnames'
import imgNeutral from '../../../assets/photos/neutral-choose-theme.jpg'
import imgIronMan from '../../../assets/photos/tony-stark-choose-theme.jpg'
import imgSpiderMan from '../../../assets/photos/spider-man-choose-theme.jpg'
import imgCaptainAmerica from '../../../assets/photos/captain-america-choose-theme.jpg'
import imgWandaMaximoff from '../../../assets/photos/wanda-maximoff-choose-theme.jpg'
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEUTRAL,
  THEME_PURPULISH,
  THEME_REDDISH,
  useTheme,
} from '../../../context/ThemeProvider'
import styles from './ChooseTheme.module.scss'

const ChooseThemeCard = ({ classes, theme, text, img }) => {
  const isTheme = useTheme()
  return (
    <div
      className={cn(styles.card, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.card__header}>{text}</div>
      <img className={styles.card__img} src={img} alt={text} />
    </div>
  )
}

const ChooseTheme = () => {
  const elements = [
    {
      classes: styles.theme__neutral,
      theme: THEME_NEUTRAL,
      text: 'Assemble',
      img: imgNeutral,
    },
    {
      classes: styles.theme__light,
      theme: THEME_LIGHT,
      text: 'Team Cap',
      img: imgCaptainAmerica,
    },
    {
      classes: styles.theme__dark,
      theme: THEME_DARK,
      text: 'Team Iron Man',
      img: imgIronMan,
    },
    {
      classes: styles.theme__purpulish,
      theme: THEME_PURPULISH,
      text: 'Spider-Boy',
      img: imgSpiderMan,
    },
    {
      classes: styles.theme__reddish,
      theme: THEME_REDDISH,
      text: "She's weird",
      img: imgWandaMaximoff,
    },
  ]
  return (
    <div className={styles.container}>
      {elements.map((element, index) => (
        <ChooseThemeCard key={index} {...element} />
      ))}
    </div>
  )
}

export default ChooseTheme
