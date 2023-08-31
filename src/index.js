import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import HomePage from './containers/HomePage'
import Header from './components/CommonComponents/Header'
import CharactersPage from './containers/CharactersPage/CharactersPage'
import App from './containers/App/App'
import { ThemeProvider } from './context/ThemeProvider'
import SingleCharacter from './containers/SingleCharacter/SingleCharacter'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: 'characters',
        element: <CharactersPage />,
      },
      { path: 'characters/:id', element: <SingleCharacter /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
