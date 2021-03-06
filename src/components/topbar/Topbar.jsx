import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import './topbar.css';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin Panel</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>

          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHtjPpYamtaZg0J1HETH2S5Wejv4elHylQfg&usqp=CAU'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
