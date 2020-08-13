import axios from 'axios'

//ACTION TYPES
const GET_CART = 'GET_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ADD_ITEM = 'ADD_ITEM'
const EMPTY_CART = 'EMPTY_CART'

//INITIAL STATE
const defaultCart = []

//ACTION CREATORS
export const getCart = cart => ({type: GET_CART, cart})
export const emptyCart = () => ({type: EMPTY_CART, cart: []})
export const removeItem = cart => ({type: REMOVE_ITEM, cart})
export const addItem = item => ({type: ADD_ITEM, item})

//THUNK CREATORS
export const getCartThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/${id}/cart`)
    dispatch(getCart(data.items))
  } catch (error) {
    console.error(error)
  }
}

export const addItemThunk = (userId, itemId, price) => async dispatch => {
  try {
    const item = await axios.put(`/api/orders`, {
      userId: userId,
      itemId: itemId,
      price: price
    })
    const {data} = await axios.get(`/api/item/${itemId}`)
    dispatch(addItem(data))
  } catch (error) {
    console.error(error)
  }
}

export const removeItemThunk = (userId, itemId) => async dispatch => {
  try {
    const cart = await axios.put('/api/orders/remove-item', {
      userId,
      itemId
    })
    dispatch(removeItem(cart.data))
  } catch (error) {
    console.error(error)
  }
}

export const emptyCartThunk = id => async dispatch => {
  try {
    await axios.put(`/api/users/${id}/checkout`)
    dispatch(emptyCart())
  } catch (error) {
    console.error(error)
  }
}
//REDUCER
export const cartReducer = (cart = defaultCart, action) => {
  switch (action.type) {
    case GET_CART:
      if (action.cart) {
        return action.cart
      } else {
        return cart
      }
    case REMOVE_ITEM:
      if (
        action.cart.length > 1 &&
        action.cart[0] &&
        action.cart[0].orderItem.quantity === 0
      ) {
        return []
      } else {
        return action.cart
      }
    case ADD_ITEM:
      return [...cart, action.item]
    case EMPTY_CART:
      return action.cart
    default:
      return cart
  }
}
