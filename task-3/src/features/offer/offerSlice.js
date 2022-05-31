import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from 'axios';

const url = 'https://snetmyapp.herokuapp.com/get_offer_count';
const urlOffer = 'https://snetmyapp.herokuapp.com/case3';
const initialState = {
    offerList: [],
    offerCount:0,
    isLoading: true
};

export const getOfferCount = createAsyncThunk(
  'cart/getOfferCount',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

export const getOffer = createAsyncThunk(
  'cart/getOffer',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(urlOffer);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  extraReducers: {
    [getOfferCount.pending]: (state) => {
      state.isLoading = true;
    },
    [getOfferCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.offerCount = action.payload.num_offers;
    },
    [getOfferCount.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getOffer.fulfilled]: (state, action) => {
      state.offerList.push(action.payload);
    },
  },
});

export default offerSlice.reducer;