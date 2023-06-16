import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
  FILTER_PRODUCTS,
  VIEW_ALL_PRODUCTS,
  INCREASE_ITEM_QTY,
  DECREASE_ITEM_QTY,
  DELETE_ALL,
  REMOVE_ITEM,
  TOTAL,
} from "./actions";

import { v4 as uuidv4 } from "uuid";

const reducer = (state, { type, payload }) => {
  if (type === DATA_FETCHING_STARTED) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      // Vogliamo aggiungere una proprietà in piu ai prodotti, la quantità che ne mettiamo in carrello
      // inoltre aggiungiamo un id unico
      cart: payload.map((prodotto) => {
        return {
          ...prodotto,
          id: uuidv4(),
          qty: 0,
        };
      }),
    };
  }

  if (type === DATA_FETCHING_FAIL) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }

  if (type === INCREASE_ITEM_QTY) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: item.qty + 1 };
        } else return { ...item };
      }),
      filteredProducts: state.filteredProducts.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: item.qty + 1 };
        } else return { ...item };
      }),
    };
  }

  if (type === DECREASE_ITEM_QTY) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: item.qty - 1 };
        } else return { ...item };
      }),
      filteredProducts: state.filteredProducts.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: item.qty - 1 };
        } else return { ...item };
      }),
    };
  }

  if (type === TOTAL) {
    return {
      ...state,
      total: state.cart.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0),

      itemsCounter: state.cart.reduce((itemsCount, item) => {
        return itemsCount + item.qty;
      }, 0),
    };
  }

  if (type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: 0 };
        } else return { ...item };
      }),
      filteredProducts: state.filteredProducts.map((item) => {
        if (payload === item.id) {
          return { ...item, qty: 0 };
        } else return { ...item };
      }),
    };
  }

  if (type === FILTER_PRODUCTS) {
    return {
      ...state,
      filteredProducts: state.cart.filter((product) => {
        if (product.type === payload) {
          return product;
        }
      }),
      selectedCategory: payload,
    };
  }

  if (type === VIEW_ALL_PRODUCTS) {
    return {
      ...state,
      viewAll: !state.viewAll,
    };
  }

  if (type === DELETE_ALL) {
    return {
      ...state,
      cart: state.cart.map((item) => {
        return { ...item, qty: 0 };
      }),

      filteredProducts: state.filteredProducts.map((item) => {
        return { ...item, qty: 0 };
      }),
    };
  }

  return state;
};

export default reducer;
