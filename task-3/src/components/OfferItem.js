import React from 'react'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import Tooltip from '@mui/material/Tooltip';

const OfferItem = ({FirmName,Cash,ImagePath,ProductDesc,SaleClosed,QuotaInfo,popoverContent}) => {
  let button;
  if (SaleClosed) {
    button = <Button variant="outlined" size="small" style={{maxWidth: '138px', maxHeight: '30px', minWidth: '138px', minHeight: '30px' ,fontSize: '11px' }}>TELEFONDA SATIN AL</Button>
  } else {
    button = <Button variant="contained"   style={{maxWidth: '138px', maxHeight: '30px', minWidth: '138px', minHeight: '30px',fontSize: '12px',fontWeight:"bold"}}>SATIN AL</Button>
  }

  function formatMyMoney(price) {
  
  var currency_symbol = "₺"

  var formattedOutput = new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2,
    });

  return formattedOutput.format(price).replace(currency_symbol, '')
  }

  return (
    <div>
      <Box  display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent='space-between'
            sx={{
              width: 850,
              height: 130,
              mt:2,
              border:1,
              borderColor: "grey.500",
              
            }}>
        <Box display="flex" flexDirection="row" sx={{ml:4}} alignItems="center" >
          <Box
            component="img"
            sx={{
            height: 30,
            width:120
            }}
            alt="logo."
            src={ImagePath}
          />
          <Divider orientation="vertical" sx={{mr:2, ml:2}} flexItem />
          <Box display="flex" flexDirection="column" >
            <Typography variant="caption" style={{ color: "black" }} sx={{fontWeight: 'bold',}} >
              {FirmName}
            </Typography>
            <Typography variant="caption" style={{ color: "black" }}>
              {ProductDesc}{popoverContent && 
                <Tooltip title={popoverContent[0].Description} placement="top-start">
                  <HelpOutlineRoundedIcon  color="primary" sx={{ fontSize: 14 ,ml:1}}/>
                </Tooltip>}
            </Typography>   
          </Box>
        </Box>
        <Box  display="flex" flexDirection="column" alignItems="flex-end" alignSelf="flex-end" sx={{mr:2,mb:2 }}>
            {QuotaInfo.HasDiscount 
            ? <>
                <Typography variant="subtitle2" style={{ color: "black" }}  sx={{mb:-1}}>
                Peşin  <Typography sx={{textDecoration: 'line-through'}} display="inline">{formatMyMoney(Cash)} TL </Typography>
                </Typography>
                <Typography variant="subtitle1" style={{ color: "black" }}  sx={{mb:2,fontWeight: 'bold',}}>
                  {formatMyMoney(QuotaInfo.PremiumWithDiscount)} TL
                </Typography>
              </>
            :<Typography variant="subtitle1" style={{ color: "black" }}  sx={{mb:2,fontWeight: 'bold',}}>
              {formatMyMoney(Cash)} TL
            </Typography>
            }
            {button}
        </Box> 
      </Box>
    </div>
  )
}

export default OfferItem;