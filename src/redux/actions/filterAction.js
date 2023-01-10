import { LOAD_PRODUCT, SEARCH_PRODUCT, SEARCH_TEXT, TOGGLE_BRAND, TOGGLE_CLEAR, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const loadProduct = (product) => {
    return {
        type: LOAD_PRODUCT,
        payload: product
    }
}

export const toggleBrand = (brandName) => {
    return {
        type: TOGGLE_BRAND,
        payload: brandName
    }
}

export const toggleStock = () => {
    return {
        type: TOGGLE_STOCK
    }
}
export const toggleClear = () => {
    return {
        type: TOGGLE_CLEAR
    }
}


export const searchText = (text) => {
    return {
        type: SEARCH_TEXT,
        payload: text
    }
}

export const searchProduct = (text) => {
    return {
        type: SEARCH_PRODUCT,
        payload: text
    }
}