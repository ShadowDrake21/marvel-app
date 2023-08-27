import { Outlet } from 'react-router-dom'
import Header from '../../components/CommonComponents/Header'
import HomePage from '../HomePage'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  )
}

export default App
