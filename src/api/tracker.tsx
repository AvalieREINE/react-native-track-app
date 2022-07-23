import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://cc59-121-72-154-250.au.ngrok.io'
})

instance.interceptors.request.use(
 async (config) => {
  const token = await AsyncStorage.getItem('token')  
  if (token) {
    config.headers.Authorization = `Bearer ${token}` 
  }
  return config
  },
  (err) => {
    return Promise.reject(err);
  }
)

export default instance;