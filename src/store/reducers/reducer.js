import { LOAD_ORDER_LIST, ADD_ITEM } from '../types'

const initialState = {
  //   orderItems: ['первый продукт','второй продукт','третий продукт'],
  orderItems: [],
}

export const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case ADD_ITEM:
      console.log('добавляем '+ action.payload )
      const newState = { ...state, orderItems: [action.payload, ...state.orderItems] }
      console.log(newState)
      return { ...state, orderItems: [action.payload, ...state.orderItems] }
    case LOAD_ORDER_LIST:
      console.log('ЛОАД ОРДЕР ЛИСТ ')
      return { ...state, orderItems: action.payload }
    default:
      return state
  }
}
