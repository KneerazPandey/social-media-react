import React from 'react';
import NavBar from  './components/navbar/NavBar';
import LeftBar from  './components/leftbar/LeftBar';
import RightBar from  './components/rightbar/RightBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
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