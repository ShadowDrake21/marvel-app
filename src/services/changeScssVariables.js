export const changeScssVariables = (theme) => {
  const root = document.querySelector(':root')

  const scssVariables = ['bgimage']

  // console.log(root.style, theme)

  scssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}
