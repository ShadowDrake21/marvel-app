export const changeScssVariables = (theme) => {
  const root = document.querySelector(':root')

  const scssVariables = ['header', 'bgimage']

  scssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}
