import React from 'react';
import {useDispatch,useSelector  } from 'react-redux';
import {getOffers} from './features/offer/offerSlice';
import { useEffect } from 'react';
import OffersList from './components/OffersList';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state)=>state.offer)

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', mt:20 }} justifyContent = "center">
        <CircularProgress />
      </Box>
      
    );
  }

  return (
    <main>
      <Grid container direction = "column"  justifyContent="center" alignItems = "center" sx={{m:3 }}>
        <Grid item xs={12}>
          <OffersList/>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
