import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

const url = 'https://snetmyapp.herokuapp.com/case1';
const initialState = {
    offerList: []
};

export const getOffers = createAsyncThunk('offer/getOffers', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  extraReducers: {
    [getOffers.fulfilled]: (state, action) => {
      console.log("------------",action);
      state.offerList = action.payload.offerList;
    }
  },
});

console.log(offerSlice);

export default offerSlice.reducer;