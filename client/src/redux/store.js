import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import betting from './reducer';


const store = configureStore({
    reducer: {
        betting,
    },  
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
})

export default store