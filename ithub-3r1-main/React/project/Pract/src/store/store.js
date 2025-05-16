import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk  from 'redux-thunk'
import { basketReducer } from './basketReducer'
import { categoryListReducer } from './categoryListReducer'
import { productsListReducer } from './productListReducer'

const rootReducer = combineReducers({
    categoryList: categoryListReducer,
    productList: productsListReducer,
    basket: basketReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
        ? applyMiddleware(thunk) 
        : applyMiddleware(thunk)
)
