import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card,
  CardActions,
  Grid,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(muiBaseTheme => ({
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
  price: {
    color: '#888'
  },
  content: {
    textAlign: 'left',
    padding: muiBaseTheme.spacing.unit * 3
  }
}))

export const Product = props => {
  const classes = useStyles()
  const {product} = props
  return (
    <div style={{padding: 20}}>
      <Link to={`/shop/${product.id}`} target="_blank">
        <Card className={classes.root}>
          <CardMedia
            image={product.imageUrl}
            title={product.name}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="body2" className={classes.name}>
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
  )
}
