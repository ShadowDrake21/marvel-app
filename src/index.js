import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './containers/HomePage'
import CharactersPage from './containers/CharactersPage/CharactersPage'
import App from './containers/App/App'
import { ThemeProvider } from './context/ThemeProvider'
import SingleCharacter from './containers/SingleCharacter/SingleCharacter'
import ComicsPage from './containers/ComicsPage/ComicsPage'
import SingleComics from './containers/SingleComics/SingleComics'
import CreatorsPage from './containers/CreatorsPage/CreatorsPage'
import './styles/index.scss'
import SingleCreator from './containers/SingleCreator/SingleCreator'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'characters',
        element: <CharactersPage />,
      },
      { path: 'characters/:id', element: <SingleCharacter /> },
      {
        path: 'comics',
        element: <ComicsPage />,
      },
      { path: 'comics/:id', element: <SingleComics /> },
      {
        path: 'creators',
        element: <CreatorsPage />,
      },
      { path: 'creators/:id', element: <SingleCreator /> },
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
