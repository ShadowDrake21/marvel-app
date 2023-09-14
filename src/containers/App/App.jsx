import { Outlet } from 'react-router-dom'
import Header from '../../components/CommonComponents/Header'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../../services/localStorage'
import { changeScssVariables } from '../../services/changeScssVariables'
import Footer from '../../components/CommonComponents/Footer/Footer'

function App() {
  if (Object.keys(getLocalStorage('theme')).length === 0) {
    setLocalStorage('theme', 'neutral')
  }
  const theme = getLocalStorage('theme')
  useEffect(() => {
    changeScssVariables(theme)
  }, [])
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
