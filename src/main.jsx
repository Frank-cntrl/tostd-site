import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import App from './App'
import Home from './pages/Home'
import Artists from './pages/Artists'
import ArtistProfile from './pages/ArtistProfile'
import Events from './pages/Events'
import Watch from './pages/Watch'
import About from './pages/About'
import Team from './pages/Team'
import NotFound from './pages/NotFound'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0a0a0a', paper: '#141414' },
    primary: { main: '#f5b942' },
  },
  typography: { fontFamily: 'inherit' },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'artists', element: <Artists /> },
      { path: 'artists/:id', element: <ArtistProfile /> },
      { path: 'events', element: <Events /> },
      { path: 'watch', element: <Watch /> },
      { path: 'about', element: <About /> },
      { path: 'team', element: <Team /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
