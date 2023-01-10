import { SEARCH_TEXT, TOGGLE_BRAND, TOGGLE_CLEAR, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        brands: [],
        stock: false,
        clear: false
    },
    keyword: ""
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TEXT:
            return {
                ...state,
                keyword: action.payload
            }
        case TOGGLE_BRAND:
            if (!state.filters.brands.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: [...state.filters.brands, action.payload]
                    }
                }
            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        brands: state.filters.brands.filter(brand => brand !== action.payload)
                    }
                }
            }
        case TOGGLE_STOCK:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    stock: !state.filters.stock
                }
            }
        case TOGGLE_CLEAR:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    brands: [],
                    stock: false,
                    clear: !state.filters.clear
                }
            }
        default:
            return state
    }
}

export default filterReducer;