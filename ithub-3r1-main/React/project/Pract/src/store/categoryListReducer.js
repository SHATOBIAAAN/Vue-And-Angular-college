const defaultState = {
    categoriesName: 'Categories',  
    categories: [],
    categoriesLinkPath: '',
    categoriesLinkName: '',
}

const ALL_CATEGORIES = 'ALL_CATEGORIES'
const FOUR_CATEGORIES = 'FOUR_CATEGORIES'

export const categoryListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALL_CATEGORIES:
            return {
                ...state,  
                categories: action.payload,
                categoriesLinkPath: '/categories',  
                categoriesLinkName: 'All Categories', 
            }
        case FOUR_CATEGORIES:
            return {
                ...state,  
                categories: action.payload,
                categoriesLinkPath: '/categories',  
                categoriesLinkName: 'All Categories', 
            }
        default:
            return state
    }
}

export const allCategoriesAction = payload => ({ type: ALL_CATEGORIES, payload })
export const fourCategoriesAction = payload => ({ type: FOUR_CATEGORIES, payload })
