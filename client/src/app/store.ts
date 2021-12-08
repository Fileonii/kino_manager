import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import seatsReducer from '../features/counter/Utils/reduxSlices/seatsSlice';

export const store = configureStore({
  reducer: {
    seats: seatsReducer
  },
},

);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
