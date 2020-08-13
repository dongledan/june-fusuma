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
      <div>
        <Header />
        <Typography variant="h4" align="center" style={{padding: 15}}>
          SHOP
        </Typography>
        <Grid container xs={12} justify="justify">
          {Array.isArray(this.props.products) &&
            this.props.products.map((product, i) => (
              <Grid xs={4} key={product.id}>
                <Product product={product} />
              </Grid>
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
