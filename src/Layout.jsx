import React, { useContext } from 'react';
import NavBar from  './components/navbar/NavBar';
import LeftBar from  './components/leftbar/LeftBar';
import RightBar from  './components/rightbar/RightBar';
import { Outlet } from 'react-router-dom';
import { DarkModeContext } from './context/dartModeContext';
import './style.scss';

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
            <div style={{flex: 6}}>
              <Outlet />
            </div>
          <RightBar />
        </div>
    </div>
  )
}

export default Layout;