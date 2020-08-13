import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCartThunk, emptyCartThunk, removeItemThunk} from './../store/cart'
import {getProductsThunk} from '../store/productList'
import {
  Grid,
  Typography,
  Button,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper
} from '@material-ui/core'

import {Header} from './header'
import {Footer} from './footer'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.checkout = this.checkout.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }
  checkout() {
    event.preventDefault()
    this.props.emptyCart(this.props.userId)
    this.props.getCart(this.props.userId)
  }

  removeItem(itemId) {
    this.props.removeItem(this.props.userId, itemId)
  }

  render() {
    const cart = this.props.cart
    return (
      <div>
        <Header />
        <Typography
          variant="h4"
          style={{paddingTop: 30, paddinBottom: 15}}
          align="center"
        >
          CART
        </Typography>
        <div
          gutterBottom
          variant="headline"
          align="center"
          style={{marginTop: 15}}
          component="h3"
        >
          {cart.length === 0 ? (
            <div>
              <Typography
                gutterBottom
                variant="headline"
                align="center"
                style={{marginTop: 15}}
                component="h3"
              >
                Your cart is currently empty.
              </Typography>
              <Link to="/shop">
                <Button
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
                    width: '20ch'
                  }}
                >
                  RETURN TO SHOP
                </Button>
              </Link>
            </div>
          ) : (
            <div style={{marginRight: '7.5%', marginLeft: '7.5%'}}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>PRODUCT</TableCell>
                      <TableCell align="right">PRICE</TableCell>
                      <TableCell align="right">QUANTITY</TableCell>
                      <TableCell align="right">SUBTOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map(item => (
                      <TableRow key={item.name}>
                        <TableCell component="th" scope="row">
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              direction: 'row'
                            }}
                          >
                            <Button
                              onClick={() => this.removeItem(item.id)}
                              style={{color: '#b28b5e', fontSize: 30}}
                            >
                              -
                            </Button>
                            <img
                              src={item.imageUrl}
                              style={{width: 50, height: 50, marginRight: 30}}
                            />
                            {item.name}
                          </div>
                        </TableCell>
                        <TableCell align="right">$ {item.price}</TableCell>
                        <TableCell align="right">
                          {item.orderItem && item.orderItem.quantity}
                        </TableCell>
                        <TableCell align="right">
                          ${' '}
                          {item.orderItem &&
                            item.orderItem.quantity * item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid
                container
                alignItems="flex-end"
                direction="column"
                style={{marginTop: 40}}
              >
                <b style={{marginBottom: 10}}>
                  Subtotal: ${' '}
                  {cart.reduce(
                    (a, b) =>
                      a + b.price * (b.orderItem && b.orderItem.quantity),
                    0
                  )}
                </b>
                <b style={{marginBottom: 10}}>Shipping: $ 12</b>
                <b style={{marginBottom: 10}}>
                  Total: ${' '}
                  {cart.reduce(
                    (a, b) =>
                      a + b.price * (b.orderItem && b.orderItem.quantity),
                    12.0
                  )}
                </b>
                <Button
                  align="right"
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
                    width: '25ch'
                  }}
                  onClick={this.checkout}
                >
                  PROCEED TO CHECKOUT
                </Button>{' '}
              </Grid>
            </div>
          )}
        </div>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    userId: state.user.id
  }
}

const mapDispatchToProps = () => {
  return dispatch => {
    return {
      getCart: id => dispatch(getCartThunk(id)),
      emptyCart: id => dispatch(emptyCartThunk(id)),
      removeItem: (userId, itemId) => dispatch(removeItemThunk(userId, itemId)),
      getProducts: () => dispatch(getProductsThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
