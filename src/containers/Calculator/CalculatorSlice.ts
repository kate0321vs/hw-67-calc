import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string,
}

const initialState: CalculatorState = {
  value: '0',
}

const error = (state:CalculatorState ) => {
  if (isNaN(Number(state.value)) || state.value.trim() === '') {
    state.value = '0';
  }
  if (state.value === 'Infinity') {
    state.value = 'NotDefined';
  }
}

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    add: (state: CalculatorState, action: PayloadAction<string>) => {
      if (state.value === '0') state.value = '';
      state.value += action.payload;
    },
    addition: (state) => {
      // error(state);
      if (state.value.includes('+')) {
        const numbersArr = state.value.split('+');
        const result = numbersArr.reduce((acc, number) => {
          return acc + +number;
        }, 0)
        state.value = result.toString();
      }
      error(state);
    },
    difference: (state: CalculatorState) => {
      if (state.value.includes('-')) {
        const numbersArr = state.value.split('-');
        const result = numbersArr.reduce((acc, number, i) => {
          if (i === 0) return +number;
          return acc - +number;
        }, 0)
        state.value = result.toString();
      }
      error(state);
    },
    multiplication: (state: CalculatorState) => {

      if (state.value.includes('*')) {
        const numbersArr = state.value.split('*');
        const result = numbersArr.reduce((acc, number, i) => {
          if (i === 0) return +number;
          return acc * +number;
        }, 0)
        state.value = result.toString();
      }
      error(state);
    },
    division: (state: CalculatorState) => {
      if (state.value.includes('/')) {
        const numbersArr = state.value.split('/');
        const result = numbersArr.reduce((acc, number, i) => {
          if (i === 0) return +number;
          return acc / +number;
        }, 0)
        state.value = result.toString();
      }
      error(state);
    },
    remove: (state: CalculatorState) => {
      if (state.value.length === 1) {
        state.value = '0'
        return
      }
      const arr = state.value.split('')
      arr.splice(arr.length - 1, 1)
      state.value = arr.join('')
    },
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {add, addition, difference, multiplication, division, remove } = CalculatorSlice.actions;