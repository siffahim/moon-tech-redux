import {
  ADD_PRODUCT,
  ADD_TO_CART, LOAD_PRODUCT, LOAD_SINGLE_PRODUCT, REMOVE_FROM_CART, REMOVE_PRODUCT, SEARCH_PRODUCT, UPDATE_PRODUCT
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
  singleProduct: {}
};

const productReducer = (state = initialState, action) => {

  const updateSelected = state.products.find(product => product._id === action.payload.updateId)


  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    case LOAD_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.payload)
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, {
          ...updateSelected,
          model: action.payload.product.model,
          image: action.payload.product.image,
          price: action.payload.product.price,
          brand: action.payload.product.brand,
          status: action.payload.product.status

        }]
      }
    case SEARCH_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.model.toLowerCase().includes(action.payload.toLowerCase()))
      }
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
