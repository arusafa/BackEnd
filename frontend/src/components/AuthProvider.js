import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const AuthProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default AuthProvider;
