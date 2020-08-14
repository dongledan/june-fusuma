import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getProductsThunk} from '../store/productList'
import {Product} from './product'
import {Grid, Typography} from '@material-ui/core'

import {Header} from './header'
import {Footer} from './footer'

class Products extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <Header />
        <Typography variant="h4" align="center" style={{padding: 15}}>
          SHOP
        </Typography>
        <Grid container xs={12} direction="row" justify="center">
          {Array.isArray(this.props.products) &&
            this.props.products.map((product, i) => (
              <Product product={product} key={product.id} />
            ))}
        </Grid>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProductsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
