import axios from 'axios'
import { setHeaders } from './headers'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const VALIDATE_TOKEN = 'VALIDATE_TOKEN'

const login = (user) => {
  return { type: LOGIN, user };
}

const logout = () => {
  return { type: LOGOUT };
}

export const validateToken = (callBack = f => f) => {
  return (dispatch) => {
    dispatch({ type: VALIDATE_TOKEN });
    const headers = axios.defaults.headers.common;
    axios.get('/api/auth/validate_token', headers)
    .then(res => {
      const user = res.data.data;
      dispatch(setHeaders(res.headers));
      dispatch(login(user))
      callBack();
    })
  .catch(() => callBack())
  }
}



export const handleRegister = (user, history) => {
  return (dispatch) => {
    axios.post('/api/auth', user)
      .then(res => {
        const {data: { data: user }, headers } = res;
        dispatch(setHeaders(headers));
        dispatch(login(user));
        history.push('/userhome')
      })
      .catch(res => {
        console.log(res)
      })
  }
}

export const handleLogout = (history) => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        const {headers} = res;
        dispatch(setHeaders(headers));
        dispatch(logout());
        history.push('/login');
      })
      .catch(res => {
        console.log(res)
      })
  }
}

export const handleLogin = (user, history) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', user)
      .then(res => {
        const { data: { data: user }, headers } = res;
        dispatch(setHeaders(headers));
        dispatch(login(user));
        history.push('/userhome')
      })
      .catch(res => {
        console.log(res)
      })
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    case LOGOUT:
      return {}
    default:
      return state
  }
}