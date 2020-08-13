import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Copyright} from './copyright'

import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  Grid,
  ListItemText
} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  copyright: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16
  }
}))

function Navbar({handleClick, isLoggedIn}) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        color="transparent"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} />
          <nav>
            {isLoggedIn ? (
              <div>
                <a
                  href="#"
                  onClick={() => {
                    handleClick()
                    handleDrawerClose()
                  }}
                  className={classes.toolbarLink}
                >
                  LOGOUT
                </a>
                <Link
                  to="/cart"
                  className={classes.toolbarLink}
                  style={{color: '#000'}}
                  onClick={handleDrawerClose}
                >
                  <ShoppingCart />
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className={classes.toolbarLink}
                  style={{color: '#000'}}
                  onClick={handleDrawerClose}
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className={classes.toolbarLink}
                  style={{color: '#000'}}
                  onClick={handleDrawerClose}
                >
                  SIGN UP
                </Link>
                <Link
                  to="/cart"
                  className={classes.toolbarLink}
                  style={{color: '#000'}}
                  onClick={handleDrawerClose}
                >
                  <ShoppingCart />
                </Link>
              </div>
            )}
          </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['HOME', 'SHOP', 'COLLECTIONS', 'ABOUT'].map((text, index) => (
            <Link
              to={`/${text.toLowerCase()}`}
              key={text}
              style={{color: '#000'}}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      style={{fontSize: 14, marginLeft: 10}}
                    >
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {['FAQ', 'CONTACT'].map((text, index) => (
            <Link
              to={`/${text.toLowerCase()}`}
              key={text}
              style={{color: '#000'}}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      style={{fontSize: 14, marginLeft: 10}}
                    >
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
          <ListItem button>
            <ListItemText
              primary={
                <Typography type="body2" style={{fontSize: 14, marginLeft: 10}}>
                  SIZE CHART
                </Typography>
              }
            />
          </ListItem>
        </List>
        <Grid direction="row" style={{paddingLeft: 2, marginLeft: 10}}>
          <IconButton
            color="default"
            href="https://www.instagram.com/rocky110907"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton color="default">
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="default"
            href="https://www.youtube.com/channel/UCPQfv6uzy-EOTxJVk3adJIg/videos"
            target="_blank"
          >
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Divider />
        <Copyright />
      </Drawer>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
