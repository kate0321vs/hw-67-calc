import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string,
}

const initialState: CalculatorState = {
  value: '',
}

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state: CalculatorState, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    addition: (state) => {
      const numbersArr = state.value.split('+');
      const result = numbersArr.reduce((acc, number) => {
        return acc + +number;
      },0)
      state.value = result.toString();
    }
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {add,addition } = CalculatorSlice.actions;