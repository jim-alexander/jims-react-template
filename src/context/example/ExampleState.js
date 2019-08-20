import React, { useReducer } from 'react';
import axios from 'axios';
import ExampleContext from './exampleContext';
import ExampleReducer from './exampleReducer';

import { SET_LOADING, SEARCH_USERS } from '../types';

const ExampleState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(ExampleReducer, initialState);

  //Search Users
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ExampleContext.Provider
      value={{
        loading: state.loading,
        searchUsers
      }}>
      {props.children}
    </ExampleContext.Provider>
  );
};

export default ExampleState;
