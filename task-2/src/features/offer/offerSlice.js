import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";

const url = 'https://snetmyapp.herokuapp.com/case2';
const initialState = {
    offerList: [],
    isLoading: true
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
    [getOffers.pending]: (state) => {
      state.isLoading = true;
    },
    [getOffers.fulfilled]: (state, action) => {
      console.log("------------",action);
      state.isLoading = false;
      state.offerList = action.payload.offerList;
    },
    [getOffers.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

console.log(offerSlice);

export default offerSlice.reducer;