import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Custom Hook
import useWindowSize from '../../hooks/useWindowSize';


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function MobileMenu( props ) {
  const classes = useStyles();
  const history = useHistory();
  const navHeader = useSelector(state=> state.navHeader);
  const [anchorEl, setAnchorEl] = useState(null);
  const size = useWindowSize();
  const { handleEmail, handleLinkedIn } = props;

  const handleMenuClick = (destination) => {
    history.push(`/${destination}`);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
      <>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={()=>{handleMenuClick('home')}}>Home</MenuItem>
        <MenuItem onClick={()=>{handleMenuClick('resume')}}>Resume</MenuItem>
        <MenuItem onClick={()=>{handleMenuClick('projects')}}>Projects</MenuItem>
        <MenuItem onClick={()=>{handleEmail()}}>Email Me!</MenuItem>
        <MenuItem onClick={()=> {handleLinkedIn('https://www.linkedin.com/in/julian-booher-794b6962/')}}>Linkedin</MenuItem>
    </Menu>
    <IconButton 
    edge="start" 
    className={classes.menuButton} 
    color="inherit" aria-label="menu"
    onClick={handleMenuOpen}
    >
        <MenuIcon />
    </IconButton>
    </>
  );
}