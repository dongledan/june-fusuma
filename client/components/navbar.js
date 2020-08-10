import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

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
  ListItemText
} from '@material-ui/core'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'

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
                  onClick={handleClick}
                  className={classes.toolbarLink}
                >
                  Logout
                </a>
                <Link to="/cart" className={classes.toolbarLink}>
                  <ShoppingCart />
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className={classes.toolbarLink}>
                  Login
                </Link>
                <Link to="/signup" className={classes.toolbarLink}>
                  Sign Up
                </Link>
                <Link to="/cart" className={classes.toolbarLink}>
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
            <ListItem button key={text}>
              <Link to={text.toLowerCase()}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['FAQ', 'CONTACT', 'SIZE CHART'].map((text, index) => (
            <ListItem button key={text}>
              <Link to={text.toLowerCase()}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>
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
