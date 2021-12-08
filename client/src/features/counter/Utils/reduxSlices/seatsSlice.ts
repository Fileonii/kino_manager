import { createAsyncThunk, createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { setConstantValue } from 'typescript';
import { RootState, AppThunk } from '../../../../app/store';
import { maxCords, allHall, isButtonExist, seatValue, seatInfo } from "../SeatsUtils"
export const initialState: seatInfo = {
  info: [],
  chosen: [],
  numberOfSeats: 0,
};
export const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    setNumberOfSeats: (state, action) => {
      state.numberOfSeats = action.payload;
    },
    loadApi: (state, action) => {
      state.info = action.payload;
    },
    changeIsChosen: (state, action) => {
      let setState: seatValue[] = state.chosen;
      //let setInfo: seatValue[] = current(state.info);
      if (!current(setState).includes(action.payload)) {
        if (state.chosen.length < state.numberOfSeats) {
          setState = [action.payload, ...setState];
        } else {
          setState = setState.splice(0, state.numberOfSeats - 1);
          setState = [action.payload, ...setState];
        }
        state.chosen = setState;
      } else {
        setState = current(setState).filter(
          obj => obj.id !== action.payload.id
        );
        state.chosen = setState;
      }
      //state.info = setInfo;
      console.log(current(state.info))
    }
  }
})
export const selectSeats = (state: RootState) => state.seats.info;
export const selectChosen = (state: RootState) => state.seats.chosen;
export const { loadApi, changeIsChosen, setNumberOfSeats } = seatsSlice.actions;

export default seatsSlice.reducer;