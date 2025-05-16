let defaultState = {
    newBasket: [],
    totalCount: 0,
  }
  
  const saveBasketDB = newBasket => {
    localStorage.setItem('basket', JSON.stringify(newBasket))
  }
  
  const checkIsBasketDB = JSON.parse(localStorage.getItem('basket'))
  if (checkIsBasketDB?.newBasket?.length) {
    defaultState = checkIsBasketDB
  }
  
  const ADD_PRODUCT = 'ADD_PRODUCT'
  const CLEAR_BASKET = 'CLEAR_BASKET'
  const DELETE_PRODUCT = 'DELETE_PRODUCT'
  
  export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        const { id, count, ...otherProps } = action.payload
        const isProductInBasket = state.newBasket.find(product => product.id === id)
        
        if (isProductInBasket) {
          isProductInBasket.count += count
        } else {
          state.newBasket.push({ id, count, ...otherProps })
        }
  
        const newState = [...state.newBasket].filter(product => product.count > 0)
        const totalCount = newState.reduce((sum, product) => sum + product.count, 0)
        
        const updatedState = { newBasket: newState, totalCount }
        saveBasketDB(updatedState)
        return updatedState
  
      case DELETE_PRODUCT:
        const idToDelete = action.payload
        const productToDelete = state.newBasket.find(product => product.id === idToDelete)
        const deletedCount = productToDelete ? productToDelete.count : 0
        const updatedBasket = state.newBasket.filter(product => product.id !== idToDelete)
        
        const newTotalCount = updatedBasket.reduce((sum, product) => sum + product.count, 0)
        
        const updatedBasketState = { newBasket: updatedBasket, totalCount: newTotalCount }
        saveBasketDB(updatedBasketState)
        return updatedBasketState
  
      case CLEAR_BASKET:
        const clearedState = { newBasket: [], totalCount: 0 }
        saveBasketDB(clearedState)
        return clearedState
  
      default:
        return state
    }
  }
  
  export const addProductAction = payload => ({ type: ADD_PRODUCT, payload })
  export const clearAction = () => ({ type: CLEAR_BASKET })
  export const deleteItemAction = payload => ({ type: DELETE_PRODUCT, payload })
  