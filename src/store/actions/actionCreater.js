import { LOAD_ORDER_LIST, ADD_ITEM } from '../types'
import { mock } from '../data'

// export const loadList = () => {
//   // mock data

//   console.log('Im from actionCreater.loadList')
//   console.log('mock is '+mock.orderItems)
//   return { type: LOAD_ORDER_LIST, payload: mock.orderItems }
// }

// export const addItem = (item) => (dispatch) => {
//     console.log('Im from actionCreater.addItem')
//     const payload = {...item, id: Date.now()}
//     dispatch({type: ADD_ITEM, payload})
// }

export const loadList = {
  type: LOAD_ORDER_LIST,
  payload: mock.orderItems,
}

export const addItem = (item, price) => {
  const newItem = { type: ADD_ITEM, payload: { id: Date.now(), name: item, price } }
  // console.log(newItem)
  return newItem
}
