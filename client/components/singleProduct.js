import React from 'react'
import {connect} from 'react-redux'
import {addItemThunk} from './../store/cart'
import {showProductThunk} from './../store/productList'
import {
  Grid,
  Card,
  CardContent,
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
      gravity: 'bottom',
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
          flexDirection="row-wrap"
          justify="center"
          alignItems="stretch"
          style={{marginTop: 40}}
        >
          <Card style={{width: 450, height: 'auto'}}>
            <Grid container>
              <img
                style={{height: '100%', width: '100%'}}
                src={product && product.imageUrl}
                title={product && product.name}
              />
            </Grid>
          </Card>
          <Card style={{width: 450, height: 'auto'}}>
            <CardActionArea
              style={{width: '100%', height: '100%', padding: 10}}
            >
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
                {product.id === 21 ? (
                  <Typography
                    style={{
                      paddingLeft: 17,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 17,
                      letterSpacing: 2,
                      marginTop: 30,
                      fontSize: 20,
                      backgroundColor: 'red',
                      color: '#fff'
                    }}
                  >
                    SOLD OUT
                  </Typography>
                ) : (
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
                      width: '15ch'
                    }}
                  >
                    ADD TO CART
                  </Button>
                )}
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
