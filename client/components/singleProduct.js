import React from 'react'
import {connect} from 'react-redux'
import {addItemThunk} from './../store/cart'
import {showProductThunk} from './../store/productList'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea
} from '@material-ui/core'
import Toastify from 'toastify-js'
import fireworks from 'fireworks'

import {Header} from './header'
import {Footer} from './footer'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    this.props.showProduct(this.props.match.params.id)
  }

  async onClick(event) {
    // someone else send this to  the cart
    event.preventDefault()
    Toastify({
      text: 'Item Added to Cart',
      duration: 2000,
      backgroundColor: '#000',
      color: '#fff',
      className: 'info',
      gravity: 'top',
      position: 'right'
    }).showToast()

    fireworks({
      x: window.innerWidth / 2,
      y: window.innerHeight / 1.5,
      colors: ['#000', '#b28b5e', '#fefefe']
    })

    await this.props.addItem(
      this.props.userId,
      this.props.match.params.id,
      this.props.product.price
    )
  }

  render() {
    const {product} = this.props

    return (
      <div align="center">
        <Header />
        <Grid
          container
          xs={12}
          direction="row"
          justify="center"
          style={{marginTop: 40}}
        >
          <Card style={{width: '40%'}}>
            <Grid container justify="flex-end">
              <CardMedia
                style={{height: 500, width: 500}}
                image={product && product.imageUrl}
                title={product && product.name}
              />
            </Grid>
          </Card>
          <Card style={{width: '40%', padding: '5%'}}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  align="left"
                  variant="h4"
                  style={{fontSize: 30}}
                >
                  {product && product.name}
                </Typography>
                <Typography
                  gutterBottom
                  align="left"
                  style={{
                    color: '#888',
                    marginTop: -10,
                    marginBottom: 30
                  }}
                >
                  $ {product && product.price}
                </Typography>
                <Typography
                  variant="h6"
                  align="left"
                  gutterBottom
                  style={{marginBottom: 30}}
                >
                  {product.season === '2020' ? `I MISS ROCKY` : ''}
                </Typography>
                {product.season !== '2020' && (
                  <Typography
                    variant="h6"
                    align="left"
                    gutterBottom
                    style={{marginBottom: 30}}
                  >
                    {product.season === '2019'
                      ? `OW. MY SHOULDER`
                      : `TALL IN THE CAR`}
                  </Typography>
                )}
                <Typography gutterBottom variant="body2" align="left">
                  {product && product.description}
                </Typography>

                <Button
                  align="left"
                  onClick={this.onClick}
                  style={{
                    borderRadius: 50,
                    backgroundColor: '#000',
                    fontWeight: '100',
                    color: '#fff',
                    paddingLeft: 17,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 17,
                    letterSpacing: 2,
                    marginTop: 30,
                    width: '19ch'
                  }}
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    product: state.products,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (orderId, itemId, price) =>
      dispatch(addItemThunk(orderId, itemId, price)),
    showProduct: id => dispatch(showProductThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
