// src/pages/MainLayout.jsx

import { Outlet } from 'react-router-dom';
// import Navbar from '../components/global/Navbar';
// import Footer from '../components/global/Footer';

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout
