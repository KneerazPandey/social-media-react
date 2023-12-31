import React, { useContext } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/dartModeContext';
import './navbar.scss';

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="left">
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <span>Novosocial</span>
        </Link>
        <HomeOutlinedIcon className='icon' />
        {
          darkMode ? <LightModeIcon 
                        className='icon' 
                        onClick={toggle}
                      /> : <NightlightOutlinedIcon 
                                className='icon' 
                                onClick={toggle}
                              />
        }
        <GridViewOutlinedIcon className='icon' />
        <div className="search">
          <SavedSearchOutlinedIcon className='icon' />
          <input type="text" name="search" placeholder='Search ...' />
        </div>
      </div>
      <div className="right">
        <Person2OutlinedIcon className='icon' />
        <MailOutlineOutlinedIcon className='icon' />
        <NotificationsNoneOutlinedIcon className='icon' />
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
          John Doe
        </div>
      </div>
    </div>
  );
}

export default NavBar;