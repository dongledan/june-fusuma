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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginLeft: '10%',
            marginRight: '10%'
          }}
        >
          {Array.isArray(this.props.products) &&
            this.props.products.map((product, i) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
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
