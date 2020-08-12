import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {TextField, Typography, Grid, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {Footer} from './footer'
import {Header} from './header'

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiTextField-root': {
      width: '50ch'
    }
  },
  grid: {
    margin: 0,
    padding: 20
  },
  text: {
    marginLeft: 16,
    marginBottom: -15,
    letterSpacing: 2
  },
  textCaption: {
    color: '#fefefe',
    paddingLeft: 20,
    paddingRight: 30,
    paddingBottom: 10,
    letterSpacing: 1,
    fontWeight: '400'
  },
  textField: {
    width: '100ch'
  },
  subtitle: {
    paddingTop: 30,
    paddingBottom: 15
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/SzRwcLB.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '40vw',
    minHeight: '40vh'
  },
  image2: {
    backgroundImage: 'url(https://i.imgur.com/6JmaCrE.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '40vw',
    minHeight: '40vh'
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
    letterSpacing: 2,
    marginLeft: 16,
    marginTop: 40,
    width: '13ch'
  },
  subtitle2: {
    fontWeight: '100',
    letterSpacing: 2
  },
  container: {
    margin: 0
  }
}))
/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  const classes = useStyles()

  return (
    <div>
      <Header />
      <Typography variant="h4" align="center" className={classes.subtitle}>
        {displayName.toUpperCase()}
      </Typography>
      <form
        onSubmit={handleSubmit}
        name={name}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          xs={12}
          justify="center"
          className={classes.container}
          direction="row"
        >
          {displayName === 'Login' ? (
            <Grid
              xs={5}
              container
              alignItems="flex-end"
              className={classes.image}
            >
              <Typography
                variant="subtitle2"
                align="center"
                className={classes.textCaption}
              >
                Deep in thought...見ぬが花
              </Typography>
            </Grid>
          ) : (
            ''
          )}

          <Grid container xs={6} direction="column" className={classes.grid}>
            <Typography
              htmlFor="email"
              variant="caption"
              className={classes.text}
            >
              EMAIL ADDRESS <text style={{color: 'red'}}>*</text>
            </Typography>

            <TextField variant="outlined" name="email" />
            <Typography
              htmlFor="password"
              variant="caption"
              className={classes.text}
            >
              PASSWORD <text style={{color: 'red'}}>*</text>
            </Typography>
            <TextField variant="outlined" name="password" />
            <Button className={classes.button}>{displayName}</Button>
            <a style={{margin: 16, color: '#b28b5e'}} href="/auth/google">
              {displayName} with Google
            </a>
          </Grid>
          {displayName === 'Sign Up' ? (
            <Grid
              container
              xs={5}
              alignItems="flex-end"
              className={classes.image2}
            >
              <Typography variant="subtitle2" className={classes.textCaption}>
                Where Jun is from, a middle finger means I love you
              </Typography>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <Footer />
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
