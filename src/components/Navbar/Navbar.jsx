import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Custom Hook
import useWindowSize from '../../hooks/useWindowSize';

import MobileMenu from './MobileMenu.jsx'


// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const history = useHistory();
  const navHeader = useSelector(state=> state.navHeader);
  const size = useWindowSize();

  const handleEmail = () => {
    window.location.href = `mailto:julianjbooher@gmail.com`
  }

  const handleLinkedIn = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {navHeader}
          </Typography>

        {size.width < 600 ? 
        <MobileMenu handleEmail={handleEmail} handleLinkedIn={handleLinkedIn} />
        :
        <>
        <Button onClick={()=> history.push('/home')}>Home</Button>
        <Button onClick={()=> history.push('/resume')}>Resume</Button>
        <Button onClick={()=> history.push('/projects')}>Projects</Button>
        <Button onClick={()=>{handleLinkedIn('https://www.linkedin.com/in/julian-booher-794b6962/')}}>LinkedIn</Button>
        <Button onClick={()=>{handleEmail()}}>Email</Button>
        </>
        }
        </Toolbar>
      </AppBar>
    </div>
  );
}