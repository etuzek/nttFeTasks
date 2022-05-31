import React from 'react';
import {useDispatch  } from 'react-redux';
import {getOffers} from './features/offer/offerSlice';
import { useEffect } from 'react';
import OffersList from './components/OffersList';
import Grid from '@mui/material/Grid';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  
  return (
    <main>
      <Grid container direction = "column" justifyContent="center" alignItems = "center" sx={{m:3 }}>
        <Grid item xs={12}>
          <OffersList/>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
