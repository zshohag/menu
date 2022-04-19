import React, { useEffect, useState } from 'react';
import { Container,Grid ,Box } from '@mui/material';
import Food from '../Food/Food';

const Foods = () => {

    const [foods,setfoods] =  useState([])
    useEffect(()=>{
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setfoods(data))
    },[])

    return (
        <div>
            <h2>{foods.length}</h2>

                <Box  >

                <Grid container >
                {

                foods.map(food => <Food  key={food._z} food={food}  ></Food>)

                }
                </Grid>
                </Box>
           
        </div>
    );
};

export default Foods;