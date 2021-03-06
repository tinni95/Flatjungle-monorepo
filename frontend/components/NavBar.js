
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useRouter } from 'next/router'
import Cookies from "js-cookie";
import { useEffect } from 'react';
import { unsetToken } from '../lib/auth';

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

export default function MenuAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleSignup = e => {
    e.preventDefault()
    router.push("/signup")
  }

  const handleLogin = e => {
    e.preventDefault()
    router.push("/signin")
  }

  const handleSignOut = e => {
    unsetToken();
    e.preventDefault()
    router.push("/")
  }

  const handleProfile = e => {
    e.preventDefault()
    router.push("/profile")
  }

  const handleHome = e => {
    e.preventDefault()
    router.push("/")
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = () => {
    if(Cookies.get("jwt")){
    return [
    <MenuItem key={1} onClick={handleProfile}>Profile</MenuItem>,
    <MenuItem key={2} onClick={handleSignOut}>Sign out</MenuItem>
    ]
    }
    else{
      return [
    <MenuItem key={1} onClick={handleLogin}>Log In</MenuItem>,
    <MenuItem key={2} onClick={handleSignup}>Sign up</MenuItem>
      ]
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleHome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {router.pathname}
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              {menuItems()}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}