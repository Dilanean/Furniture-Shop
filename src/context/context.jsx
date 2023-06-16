import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAIL,
  FILTER_PRODUCTS,
  VIEW_ALL_PRODUCTS,
  INCREASE_ITEM_QTY,
  DECREASE_ITEM_QTY,
  REMOVE_ITEM,
  DELETE_ALL,
  TOTAL,
} from "./actions";

const url = "https://api.npoint.io/66dcbba3b45cf996c0b2";

const initialState = {
  cart: [],
  isLoading: true,
  isError: false,
  itemsCounter: 0,
  total: 0,
  selectedCategory: "chairs",
  filteredProducts: [],
  viewAll: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseItemQty = (id) => {
    dispatch({ type: INCREASE_ITEM_QTY, payload: id });
  };

  const decreaseItemQty = (id) => {
    dispatch({ type: DECREASE_ITEM_QTY, payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const deleteAll = () => {
    dispatch({ type: DELETE_ALL });
  };

  const filterProducts = (category) => {
    dispatch({ type: FILTER_PRODUCTS, payload: category });
  };

  const viewAllProducts = () => {
    dispatch({ type: VIEW_ALL_PRODUCTS });
  };

  //Data fetching
  useEffect(() => {
    (async () => {
      // Lo scopo di questa action sarà quello di variare lo state di isLoading in true
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios(url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data });
        filterProducts("chairs");
      } catch (error) {
        dispatch({ type: DATA_FETCHING_FAIL });
        console.log("Errore");
      }
    })();
  }, []);

  useEffect(() => {
    dispatch({ type: TOTAL });
  }, [state.cart]);

  console.log(state.cart);
  return (
    <AppContext.Provider
      value={{
        ...state,
        filterProducts,
        viewAllProducts,
        increaseItemQty,
        decreaseItemQty,
        removeItem,
        deleteAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
