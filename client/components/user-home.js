import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Typography, Grid, CssBaseline, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Footer} from './footer'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/4c0bIKG.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '93.5vh'
  },
  title: {
    padding: 20,
    marginTop: 10,
    marginBottom: '20vh'
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#000',
    fontWeight: '100',
    color: '#fff',
    paddingLeft: 17,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 17,
    letterSpacing: 2
  }
}))
/**
 * COMPONENT
 */

export const UserHome = props => {
  const {email} = props
  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} className={classes.image}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{height: '78vh'}}
        >
          <Typography align="center" variant="h1" className={classes.title}>
            JUNFUSUMA
          </Typography>
          <Typography variant="h2" style={{color: '#fff', paddingTop: 20}}>
            " I MISS ROCKY "
          </Typography>
          <Typography variant="h6" style={{color: '#fff', marginTop: -10}}>
            ────────
          </Typography>
          <Typography
            variant="h6"
            style={{color: '#fff', marginTop: -10, paddingBottom: 40}}
          >
            2020
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: '#b28b5e',
              paddingBottom: 50,
              fontSize: 18,
              letterSpacing: 3
            }}
          >
            LIMITED SAMPLE RUN
          </Typography>
          <Link to="/shop">
            <Button className={classes.button}>SHOP</Button>
          </Link>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
