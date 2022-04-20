import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/closeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})
