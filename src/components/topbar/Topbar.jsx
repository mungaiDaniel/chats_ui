import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState, useEffect } from 'react';


const Topbar = () => {
  

  const [hasToken, setHasToken] = useState('');

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    setHasToken(token !== null);
  }, []);

  const navigate = useNavigate();
    const logout = () =>{
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user_role')
      navigate('/login')
    }
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
      <Link to="/" >
      <span className="logo">Chats</span>
      </Link>
        
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon" />
        <input
          placeholder="Search for friend, post or video"
          className="searchInput"
        />
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarLinks">
        
      <Link to="/">
        <span className="topbarLink">Feeds</span>
        </Link>
        {
          hasToken &&
          <Link to="/profile">
          <span className="topbarLink">Profile</span>
          </Link>
        }
        {
          hasToken && (<Link to="/mypost">
          <span className="topbarLink">My Posts</span>
          </Link>)
        }
        
        
        
        {
          window.localStorage.getItem('token')?
          (<span onClick={logout} className="topbarLink">logout</span>)
          :
          (<Link to="/login">
            <span className="topbarLink">login</span>
            </Link>)
        }
        
        

      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img onClick={handleClick} src="https://randomuser.me/api/portraits/men/42.jpg" alt="" className="topbarImg"/>
    </div>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      autoFocus
      className='m-2 simple_menu'
    >
      {
          window.localStorage.getItem('token')?
          (<MenuItem onClick={handleClose} ><span onClick={logout} className="menuLink">logout</span></MenuItem>)
          :
          (<Link to="/login"><MenuItem onClick={handleClose}>
            <span className="menuLink">login</span>
          </MenuItem> </Link>)
        }


    </Menu>
  </div>
  )
}

export default Topbar


