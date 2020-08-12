import React from 'react'
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
  form2: {
    '& .MuiTextField-root': {
      width: '100ch'
    }
  },
  grid: {
    width: '100%',
    margin: 0,
    padding: 20
  },
  text: {
    marginLeft: 16,
    marginBottom: -15,
    letterSpacing: 2
  },
  textField: {
    width: '100ch'
  },
  subtitle: {
    paddingTop: 30,
    paddingBottom: 15
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
    marginTop: 40
  },
  subtitle2: {
    fontWeight: '100',
    letterSpacing: 2
  }
}))

export const Contact = () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Typography variant="h4" align="center" className={classes.subtitle}>
        CONTACT
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        className={classes.subtitle2}
      >
        LEAVE A MESSAGE (・ωｰ)～☆
      </Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Grid container direction="column" className={classes.grid}>
          <Typography variant="caption" className={classes.text}>
            YOUR NAME
          </Typography>
          <TextField variant="outlined" />
          <Typography variant="caption" className={classes.text}>
            YOUR EMAIL
          </Typography>
          <TextField required variant="outlined" />
          <Typography variant="caption" className={classes.text}>
            SUBJECT
          </Typography>
          <TextField required variant="outlined" />
        </Grid>
      </form>
      <form className={classes.form2} noValidate autoComplete="off">
        <Grid xs={12} container className={classes.grid}>
          <Typography variant="caption" className={classes.text}>
            YOUR MESSAGE
          </Typography>

          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            variant="outlined"
          />
          <Button className={classes.button}>SEND</Button>
        </Grid>
      </form>
      <Footer />
    </div>
  )
}

export default Contact
