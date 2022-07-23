import createDataContext from './CreateDataContext';
import trackApi from '../api/tracker';  
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errMsg: action.payload};
    case 'signin':
      return {errMsg:'', token: action.payload};
    case 'clear_error':
      return {...state, errMsg: ''}
    case 'signout':
      return {token: null, errMsg: ''}
    default:
      return state;
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({type: 'signin', payload: token})
    navigate('Main flow', null)
  }else {
    navigate('Auth flow', null)
  }
}

const clearErrMsg = dispatch => () => {
  dispatch({type: 'clear_error'})
}

const signup = (dispatch) => async({email, password}) => {
    try {
      const response = await trackApi.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token})
      navigate('Main flow', null)
    } catch (error) {
      dispatch({type: 'add_error', payload: 'Something went wrong with signup'});
      console.log(error);
    }
  }


const signin = (dispatch) => async ({email, password}) => {
    try {
      const response = await trackApi.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token})
      navigate('Main flow', null)
    } catch (error) {
      console.log(error);
      
      dispatch({type: 'add_error', payload: 'Something went wrong with signin'});
      
    }
  }
 

const signout = (dispatch) => async() => {
  await AsyncStorage.removeItem('token')
  dispatch({type: 'signout' })
  navigate('Auth flow', null)
}

export const {Provider, Context} = createDataContext(
  authReducer, 
  {signup, signin, signout, clearErrMsg, tryLocalSignin},
  {token: null, errMsg: ''}
)