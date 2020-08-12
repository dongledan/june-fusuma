import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Typography, Grid, CssBaseline, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Footer} from './footer'

const useStyles = makeStyles(theme => ({
  root: {
    height: '90vh'
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/4c0bIKG.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  title: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 20
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#000',
    color: '#fff'
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
        <Typography align="center" variant="h1" className={classes.title}>
          JUNFUSUMAデブ
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="center"
          style={{height: '78vh'}}
        >
          <Typography variant="h2" style={{color: '#fff', paddingTop: 20}}>
            " I MISS ROCKY "
          </Typography>
          <Typography
            variant="h6"
            style={{color: '#fff', marginTop: -10, paddingBottom: 20}}
          >
            2020
          </Typography>
          <Typography
            variant="h5"
            style={{color: '#b28b5e', paddingBottom: 40}}
          >
            LIMITED SAMPLE RUN
          </Typography>
          <Button className={classes.button}>SHOP</Button>
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
