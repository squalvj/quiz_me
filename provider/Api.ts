import axios from 'axios';
import servicesList, {Config} from '../types/Service';
const TIMEOUT = 20000 //20 sec
const API_URL = process.env.API_URL

export const list = servicesList

export const call = (obj: Config, errHandling = false) => {
   const {
      url, 
      method,
      header,
      data
   } = obj
   const CancelToken = axios.CancelToken;
   let cancel;

   const theHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...header
   };

   const config = {
      baseURL: `${API_URL}${url}`,
      timeout: TIMEOUT,
      headers: theHeader,
      method: method,
      data,
      cancelToken: new CancelToken(function (c) {
         cancel = c
      })
   }
   let instance = axios.create()

   // useful for custom error handling
   const theResHandling: any = !!errHandling ? errHandling : resIntersceptor

   // Add a request interceptor
   instance.interceptors.request.use(config => reqInterceptor(config, cancel), interceptReqErr);

   // Add a response interceptor
   instance.interceptors.response.use(theResHandling, interceptResErr);
   
   return instance.request(config).then(theHandler).catch(e => e)
}

const theHandler = res => {
  
}

// ---------------------- REQUEST INTERCEPTOR ----------------------
const reqInterceptor = (config, cancel) => {
   // do checking if necessary, to cancel the request being fired

   // cancel('Cancel by user')
   return config
}

const interceptReqErr = error => {
   
}
// ---------------------- / ----------------------------------------


// ---------------------- RESPONSE INTERCEPTOR ----------------------
const resIntersceptor = response => {
   // TRANSFORM DATA FROM DOWNSTREAM INTO WHATEVER YOU WANT
   return response.data
}

// GENERIC ERROR RESPPONSE HANDLING, E.G NO INTERNET
const interceptResErr = error => {
  
}
// ---------------------- / ----------------------------------------
