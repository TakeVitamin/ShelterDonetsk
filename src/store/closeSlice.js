import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: false
}

export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            close: (state) => {
                state.value = !state.value
            },
        }
    }
)


export const {close} = counterSlice.actions

export default counterSlice.reducer