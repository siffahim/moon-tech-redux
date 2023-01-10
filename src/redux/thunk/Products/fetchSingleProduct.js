import { loadSingleProduct } from "../../actions/productAction"

const fetchSingleProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/products/${id}`)
        const data = await res.json()

        if (data) {
            dispatch(loadSingleProduct(data))
        }
    }
}

export default fetchSingleProduct;