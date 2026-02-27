// src/pages/MainLayout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto p-6">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
