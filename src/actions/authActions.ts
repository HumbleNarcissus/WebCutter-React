import jwt_decode from 'jwt-decode';
import { SET_USER } from './action-types';

// Login - Get user token
export const loginUser: any = (userData: any) => (dispatch: any) => {
    fetch(`http://localhost/login`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password
      })
    })
    .then(response => response.json())
    .then(json => {
      // save token in localStorage
      const { auth_token } = json;
      localStorage.setItem('jwtToken', auth_token);
      // decode token
      const decoded = jwt_decode(auth_token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch( err => console.error(err))
};

// Set logged in user
export const setCurrentUser = (decoded: any)  => {
  return {
    type: SET_USER,
    payload: decoded
  };
}