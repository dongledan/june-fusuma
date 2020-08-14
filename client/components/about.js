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
  imageSize: {
    height: 200,
    width: 200
  },
  jun: {
    height: 400,
    width: 400,
    padding: 20
  },
  subtitle: {
    paddingTop: 30,
    paddingBottom: 15
  },
  text: {
    marginTop: 20,
    width: '50%'
  },
  textWidth: {
    width: '60%'
  },
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export const About = () => {
  const classes = useStyles()
  const clothes = [
    'FENDI SQUARE ACETATE SUNGLASSES - $385',
    'OFF-WHITE CAMO PADDED FIELD JACKET - $1,940',
    'SAINT LAURENT YSL POCKET TEE - $169',
    'RRL STRAIGHT LEG JEANS (EUBANKS) - $420',
    'TIMBERLAND CLASSIC CHUKKA BOOTS - $135'
  ]
  const imgs = [
    'https://i.imgur.com/1NZUYZG.png',
    'https://i.imgur.com/mrhsqCE.png',
    'https://i.ibb.co/mDYFHNs/Screen-Shot-2020-08-12-at-22-09-18.png',
    'https://i.imgur.com/fFzlKIq.png',
    'https://i.imgur.com/9aihmr6.png'
  ]

  return (
    <Grid container component="main" className={classes.root}>
      <Grid>
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
      <Grid container justify="center">
        <img
          src="https://i.ibb.co/mqJ8c1d/IMG-2110.jpg"
          className={classes.jun}
        />
      </Grid>
      <Grid container direction="row" justify="center">
        {clothes.map((item, i) => (
          <div className={classes.style}>
            <img src={imgs[i]} className={classes.imageSize} />
            <Typography
              variant="caption"
              align="center"
              className={classes.textWidth}
            >
              {item}
            </Typography>
          </div>
        ))}
      </Grid>

      <Footer />
    </Grid>
  )
}

export default About
