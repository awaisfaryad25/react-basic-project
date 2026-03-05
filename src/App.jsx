// src/App.tsx (or App.jsx)
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from './pages/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",  element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },  
        { path: "about", element: <About /> },
        { path: "posts", element: <Posts /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
