import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

interface CounterSlice {
    value : number 
}

const initialState: CounterSlice = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState, 
    reducers: {
        increment: (state) => {
            state.value += 1;
          },
          decrement: (state) => {
            state.value -= 1;
          },
          reset: (state) => {
            state.value = 0;
          },
          incrementByAmount: (state, action: PayloadAction<number>) => {
            console.log(action, 'action');
            
            state.value += action.payload;
          },
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;