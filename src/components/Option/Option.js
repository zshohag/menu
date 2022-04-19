import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useFetch from '../../hooks/useFetch';
import { Grid } from '@mui/material';
import Food from '../Food/Food';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const [menuTab,setMenuTab]  =  useState('Breakfast')
  const [loading, setLoading] = useState(false)
  const [foods]  = useFetch()
   
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },1000)
},[])
  
const handleMenuTabs = (type) => {
  setMenuTab(type)
}


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <>

    <Box sx={{ width: '100%'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab className={menuTab === 'Breakfast' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Breakfast')} label="Breakfast" />
        <Tab className={menuTab === 'Lunch' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Lunch')} label="Lunch" />
        <Tab className={menuTab === 'Dinner' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Dinner')} label="Dinner" />
      </Tabs>
    </Box>

    <Box>

       {/*  {foods.filter((item) => menuTab === item.category).map(item => (
                    loading ? <p>Z</p> : <h1>ZS</h1>
                ))} */}

        {foods.filter((item) => menuTab === item.category).map(item => (
                    loading ? <Food key={item._z} item={item}  ></Food> : <h></h>
                ))}

    </Box>

    </>
  );
}
