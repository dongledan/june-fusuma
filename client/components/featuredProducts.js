import React from 'react'
import {Link} from 'react-router-dom'
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  subheader: {
    paddingTop: 30,
    paddingBottom: 15
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    letterSpacing: 0
  },
  text: {
    marginTop: 20,
    width: '50%'
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
    paddingTop: '80%'
  },
  name: {
    fontWeight: '400',
    letterSpacing: 2,
    fontSize: 12,
    height: 35
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
  },
  price: {
    color: '#888'
  },
  content: {
    textAlign: 'left',
    padding: theme.spacing.unit * 3
  }
}))

export const FeaturedProducts = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <Typography variant="h4" align="center" className={classes.subtitle}>
        FEATURED PRODUCTS
      </Typography>
      <Typography variant="subtitle2" align="center">
        I MISS ROCKY SAMPLE RUN
      </Typography>
      <Typography
        variant="h6"
        align="center"
        style={{color: '#b28b5e', marginBottom: 30}}
      >
        . . .
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
        {products.map((product, i) => (
          <div style={{padding: 20}}>
            <Link to={`/shop/${product.id}`} target="_blank">
              <Card className={classes.root}>
                <CardMedia
                  image={product.imageUrl}
                  title={product.name}
                  className={classes.media}
                />
                <CardContent className={classes.content}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    className={classes.name}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="caption"
                    className={classes.price}
                  >
                    $ {product.price}
                  </Typography>
                </CardContent>
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
    </Grid>
  )
}

const products = [
  {
    id: 1,
    season: '2020',
    name: 'LITTLE PRODIGY L/S',
    imageUrl: 'https://i.ibb.co/9gWpRgH/ljb.png',
    price: '45.00',
    quantity: 5,
    description:
      'It takes 10,000 hours to become an expert. Have you been putting in the work? Chances are, some little asian boy is already better than you.'
  },
  {
    id: 2,
    season: '2020',
    name: 'BOB ROSS PAINTS JUN TEE',
    imageUrl: 'https://i.imgur.com/LAGuAUC.png',
    price: '25.00',
    quantity: 5,
    description:
      'This was all a mistake but at least it is a happy mistake. A tree here, and tree there and we got ourselves a painting.'
  },
  {
    id: 6,
    season: '2020',
    name: 'BORN ALONE TEE',
    imageUrl: 'https://i.imgur.com/Otdtzmg.png',
    price: '25.00',
    quantity: 5,
    description: '6 oz 100% ring spun cotton'
  }
]

export default FeaturedProducts
