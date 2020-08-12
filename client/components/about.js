import React from 'react'
import {Typography, Grid, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Footer} from './footer'

const useStyles = makeStyles(theme => ({
  root: {
    height: '90vh'
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/IxamB99.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '40vw',
    minHeight: '40vh'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 20
  },
  subtitle: {
    paddingTop: 30,
    paddingBottom: 15
  },
  text: {
    marginTop: 20,
    width: '50%'
  }
}))

export const About = () => {
  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12}>
        <Typography align="center" variant="h3" className={classes.title}>
          JUNFUSUMA
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{height: '84vh'}}
        >
          <Typography variant="h4" className={classes.subtitle}>
            ABOUT OUR BRAND
          </Typography>
          <Typography variant="body2" style={{marginBottom: 40}}>
            BEAUTY IS SKIN DEEP // UGLY GOES RIGHT TO THE BONE
          </Typography>
          <Divider />
          <Grid xs={6} className={classes.image} />
          <Typography align="center" variant="caption" className={classes.text}>
            Jun Fusuma is not only a fashion icon-- he is a champion in Judo, an
            elite strength athlete, and an award winning chef. A fashion icon
            changing our relationship with clothes, each design is crafted
            purposefully: to make you think like Jun, look good like Jun, and to
            ultimately become Jun. Fueled by one purpose; to create enough Juns
            that will one day come together to form the ultimate boy band.
          </Typography>
          <Typography align="center" variant="caption" style={{marginTop: 20}}>
            A worldwide campaign based in New York, New York.
          </Typography>
          <Typography align="center" variant="caption">
            By a kid with broken shoulders, you can still lean on Jun.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

export default About
