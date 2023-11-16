import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "/src/assets/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,

    children: [
      {path: '/', element: <Home/>},
      {path: 'login', element: <Login/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
