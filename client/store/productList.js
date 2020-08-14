import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
const SHOW_PRODUCT = 'SHOW_PRODUCT'
const SHOW_SEASON = 'SHOW_SEASON'

/**
 * INITIAL STATE
 */
const productList = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({type: GET_PRODUCTS, products})
const showProduct = product => ({type: SHOW_PRODUCT, product})
const showSeason = products => ({type: SHOW_SEASON, products})

/**
 *
 * THUNK CREATORS
 */
export const getProductsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/items')
    dispatch(getProducts(data))
  } catch (err) {
    console.error(err)
  }
}
export const showProductThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/items/${id}`)
    dispatch(showProduct(data))
  } catch (error) {
    console.error(error)
  }
}
export const showSeasonThunk = season => async dispatch => {
  try {
    const {data} = await axios.get(`/api/items/collections/${season}`)
    dispatch(showSeason(data))
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
    case SHOW_SEASON:
      return action.products
    default:
      return products
  }
}
