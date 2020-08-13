import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: '20vw',
    height: '100%'
  },
  media: {
    width: '15vw',
    height: '15vh',
    marginLeft: '2.5vw',
    marginRight: '2.5vw'
  },
  name: {
    fontWeight: '400',
    letterSpacing: 2,
    fontSize: 12
  },
  price: {
    color: '#888'
  }
})

export const Product = props => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          image={props.product.imageUrl}
          title={props.product.name}
          className={classes.media}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="h2"
            className={classes.name}
          >
            {props.product.name}
          </Typography>
          <Typography gutterBottom variant="caption" className={classes.price}>
            $ {props.product.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
