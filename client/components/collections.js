import React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Grid, Card, Button, CardMedia} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import {Header} from './header'
import {Footer} from './footer'

const useStyles = makeStyles(theme => ({
  subheader: {
    paddingTop: 30,
    paddingBottom: 15
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20
  },
  root: {
    width: 250,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
  },
  media: {
    paddingTop: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  name: {
    fontWeight: '400',
    letterSpacing: 2,
    fontSize: 20,
    padding: 10
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
    marginTop: 40,
    marginBottom: 20
  }
}))

export const Collections = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Header />
      <Typography variant="h4" align="center" className={classes.subtitle}>
        COLLECTIONS
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {collections.map((item, i) => (
          <div style={{padding: 20}}>
            <Link to={`/collections/${item.id}`}>
              <Card className={classes.root}>
                <Typography
                  variant="h5"
                  align="center"
                  style={{backgroundColor: '#000', color: '#fff'}}
                >
                  {item.id}
                </Typography>

                <CardMedia
                  image={item.imageUrl}
                  title={item.name}
                  className={classes.media}
                >
                  <Typography
                    style={{fontSize: 20}}
                    variant="h1"
                    className={classes.name}
                  >
                    {item.name}
                  </Typography>
                </CardMedia>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link to="/shop">
          <Button className={classes.button}>SEE ALL PRODUCTS</Button>
        </Link>
      </div>
      <Footer />
    </Grid>
  )
}

const collections = [
  {
    id: 2020,
    name: 'I MISS ROCKY',
    imageUrl: 'https://i.imgur.com/4c0bIKG.jpg'
  },
  {
    id: 2019,
    name: 'OW! MY SHOULDER',
    imageUrl: 'https://i.imgur.com/tAON64n.png'
  },
  {
    id: 2018,
    name: 'TALL IN THE CAR',
    imageUrl: 'https://i.imgur.com/cyEwvE3.png'
  }
]

export default Collections
