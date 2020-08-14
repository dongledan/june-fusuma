import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Typography, Grid, CssBaseline, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Footer} from './footer'
import {FeaturedProducts} from './featuredProducts'

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
    marginBottom: '25%',
    fontSize: '12vh'
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
          justify="center"
        >
          <Link to="/home">
            <Typography align="center" variant="h1" className={classes.title}>
              JUN FUSUMA
            </Typography>
          </Link>

          <Link to="/shop">
            <Typography
              variant="h2"
              align="center"
              style={{color: '#fff', paddingTop: 20, fontSize: '5vh'}}
            >
              " I MISS ROCKY "
            </Typography>
          </Link>

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
      <FeaturedProducts />
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
