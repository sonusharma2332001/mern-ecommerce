import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAuth } from './AuthAPI';

const initialState = {
  value: 0,
  status: 'idle',
};
export const incrementAsync = createAsyncThunk(
  'counter/fetchAuth',
  async (amount) => {
    const response = await fetchAuth(amount);
    return response.data;
  }
);

export const AuthSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment} = AuthSlice.actions;
export const selectCount = (state) => state.counter.value;


export default AuthSlice.reducer;
