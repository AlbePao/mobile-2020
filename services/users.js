import { useEffect, useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: null,
  users: [],
};

function usersReducer(state, action) {
  switch (action.type) {
    case 'USERS_FETCH_START':
      return { ...state, isLoading: true };
    case 'USERS_FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    case 'USERS_FETCH_SUCCESS':
      return { ...state, isLoading: false, error: null, users: action.payload };
    default:
      return state;
  }
}

export function fetchUsers(page = 1) {
  const [data, dispatch] = useReducer(usersReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'USERS_FETCH_START' });

    fetch(`https://mz37bp4toc.execute-api.eu-west-1.amazonaws.com/challenge/users?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status);
        }

        return response.json();
      })
      .then((json) => {
        dispatch({ type: 'USERS_FETCH_SUCCESS', payload: json.Users });
      })
      .catch((error) => {
        dispatch({ type: 'USERS_FETCH_FAILURE', payload: error });
      });
  }, [page]);

  return data;
}
