import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string,
}

const initialState: CalculatorState = {
  value: '0',
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
      if (state.value.includes('+')) {
        const numbersArr = state.value.split('+');
        const result = numbersArr.reduce((acc, number) => {
          return acc + +number;
        }, 0)
        state.value = result.toString();
      }
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
    },
    remove: (state: CalculatorState) => {
      // if (state.value === '0') return;
      if (state.value.length === 1) {
        state.value = '0'
        return
      }
      const arr = state.value.split('')
      arr.splice(arr.length - 1, 1)
      state.value = arr.join('')
    }
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {add, addition, difference, multiplication, division, remove } = CalculatorSlice.actions;