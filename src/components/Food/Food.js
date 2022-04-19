import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Food = ({food}) => {

    const {name,_id,image}  = food

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '200px',
        maxHeight: '200px',
      });


    return (
        <div>
           
        <Grid 
            sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}

           item xs={12} sm={12}  md={4} >

            <Img src={image} alt="" />
            <Typography >

            <Box sx={{ textAlign: 'center', m: 1 ,fontSize: 15  }} >

            <h3 >{name}</h3>
            <h4>{_id}</h4>
            </Box>
            </Typography>
        </Grid>
           

        </div>
    );
};

export default Food;





/*

https://i.ibb.co/VVLWsX7/breakfast6.png
https://i.ibb.co/Cwmw7hn/breakfast1.png
https://i.ibb.co/h90DWQD/breakfast2.png
https://i.ibb.co/NnYMFXN/breakfast3.png
https://i.ibb.co/wQGXKBc/breakfast4.png
https://i.ibb.co/0JQcVFQ/breakfast5.png

*/



/* 

https://i.ibb.co/Q6DR0M3/lunch6.png
https://i.ibb.co/W0XxYgZ/lunch1.png
https://i.ibb.co/z8m2zFd/lunch2.png
https://i.ibb.co/PNCxqgC/lunch3.png
https://i.ibb.co/kHB1rmY/lunch4.png
https://i.ibb.co/2SJd4Js/lunch5.png





*/



/* 
https://i.ibb.co/hKVZCSQ/dinner1.png
https://i.ibb.co/0QxXcbh/dinner2.png
https://i.ibb.co/V3DDQMn/dinner3.png
https://i.ibb.co/0yDn7bF/dinner4.png
https://i.ibb.co/QrLSPV8/dinner5.png
https://i.ibb.co/bJPdhsH/dinner6.png

*/
