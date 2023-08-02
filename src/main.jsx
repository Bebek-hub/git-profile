import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import DisplayRepo from './pages/DisplayRepo.jsx'

import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },

//   {
//     path: 'display-repo',
//     element: <DisplayRepo />
//   }
// ]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
      <App />
    {/* </RouterProvider> */}
  </React.StrictMode>,
)
