import React from 'react';
import {useDispatch,useSelector  } from 'react-redux';
import {getOffer,getOfferCount} from './features/offer/offerSlice';
import { useEffect } from 'react';
import OffersList from './components/OffersList';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function App() {
  const dispatch = useDispatch();
  const {isLoading,offerCount} = useSelector((state)=>state.offer)

  const addOfferList = ()=>{
    for (let index = 0; index < offerCount; index++) {
      dispatch(getOffer())
    }
  }
  
  useEffect(() => {
    dispatch(getOfferCount());
  }, []);
  
  useEffect(()=>{
    addOfferList();
  },[offerCount])

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', mt:20 }} justifyContent = "center">
        <CircularProgress />
      </Box>
      
    );
  }

  return (
    <main>
      <Grid container direction = "column"  alignItems = "center" sx={{m:3,p:1}}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ color: "black" }}>{offerCount} teklifiniz var.</Typography>
        </Grid>
        <Grid item xs = {12}>
          <OffersList/>
        </Grid>
      </Grid>
    </main>
  );
}

export default App;
