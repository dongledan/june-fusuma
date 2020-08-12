import React from 'react'
import {Typography, Grid, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Footer} from './footer'
import {Header} from './header'

const useStyles = makeStyles(theme => ({
  root: {
    height: '200vh'
  },
  image: {
    backgroundImage: 'url(https://i.imgur.com/IxamB99.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '40vw',
    minHeight: '40vh'
  },
  image2: {
    backgroundImage: 'url(https://i.imgur.com/gqnyUuQ.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '20vw',
    minHeight: '40vh'
  },
  image3: {
    backgroundImage: 'url(https://i.imgur.com/gqnyUuQ.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  subtitle: {
    paddingTop: 30,
    paddingBottom: 15
  },
  text: {
    marginTop: 20,
    width: '50%'
  },
  stealThatLook: {
    paddingLeft: '10%',
    paddingRight: '10%'
  }
}))

export const About = () => {
  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12}>
        <Header />
        <Grid container spacing={0} direction="column" alignItems="center">
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
          <Typography variant="h4" className={classes.subtitle}>
            STEAL JUN'S LOOK
          </Typography>
          <Grid container direction="row" className={classes.stealThatLook}>
            <Grid xs={4} className={classes.image2} />
            <Grid container xs={8} direction="column">
              <Grid container xs={6} direction="row">
                <Grid xs={3} className={classes.image3} />

                <Grid xs={3}>
                  <Typography variant="caption">
                    Fendi Square Acetate Sunglasses - $385
                  </Typography>
                </Grid>
              </Grid>

              <Typography>hello</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  )
}

export default About
