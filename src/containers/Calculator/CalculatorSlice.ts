import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string[],
}

const initialState: CalculatorState = {
  value: [],
}

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state: CalculatorState, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    }
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {add } = CalculatorSlice.actions;