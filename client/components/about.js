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
    width: '40vw',
    minHeight: '70vh'
  },
  image4: {
    backgroundImage: 'url(https://i.imgur.com/mrhsqCE.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '24vh'
  },
  imageSize: {
    height: 200,
    width: 200
  },
  image3: {
    backgroundImage: 'url(https://i.imgur.com/1NZUYZG.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '40vh'
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
  const clothes = [
    'FENDI Square Acetate Sunglasses - $385',
    'OFF-WHITE Camouflage Padded Field Jacket - $1,940',
    'RRL Straight Leg Jeans (Eubanks) - $420',
    'TIMBERLAND Classic Chukka Boots - $135'
  ]
  const imgs = [
    'https://i.imgur.com/1NZUYZG.png',
    'https://i.imgur.com/mrhsqCE.png',
    'https://i.imgur.com/fFzlKIq.png',
    'https://i.imgur.com/9aihmr6.png'
  ]

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
        </Grid>
      </Grid>
      <Grid container xs={12} direction="row" justify="center">
        <Grid
          container
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <img
            src="https://i.imgur.com/1NZUYZG.png"
            className={classes.imageSize}
          />
          <Typography variant="caption" className={classes.textWidth}>
            FENDI Square Acetate Sunglasses - $385
          </Typography>
        </Grid>
        <Grid container xs={4} direction="row">
          <img
            src="https://i.imgur.com/mrhsqCE.png"
            className={classes.imageSize}
          />
          <Typography variant="caption">
            OFF-WHITE Camouflage Padded Field Jacket - $1,940
          </Typography>
        </Grid>
        <Grid container xs={4} direction="row">
          <img
            src="https://i.imgur.com/fFzlKIq.png"
            className={classes.imageSize}
          />
          <Grid>
            <Typography variant="caption">
              RRL Straight Leg Jeans (Eubanks) - $420{' '}
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={4} direction="row">
          <img
            src="https://i.imgur.com/9aihmr6.png"
            className={classes.imageSize}
          />
          <Grid>
            <Typography variant="caption">
              Timberland Classic Chukka Boots - $135{' '}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Grid>
  )
}

export default About
