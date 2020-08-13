import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const SHOW_PRODUCT = 'SHOW_PRODUCT'

/**
 * INITIAL STATE
 */
const productList = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})
const showProduct = product => ({type: SHOW_PRODUCT, product})
/**
 *
 * THUNK CREATORS
 */
export const getProductsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/item')
    dispatch(getProducts(data))
  } catch (err) {
    console.error(err)
  }
}
export const showProductThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/item/${id}`)
    dispatch(showProduct(data))
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export const productsReducer = (products = productList, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case SHOW_PRODUCT:
      return action.product
    default:
      return products
  }
}
