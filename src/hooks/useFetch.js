import React, { useEffect, useState } from 'react';

const useFetch = () => {

    const [foods,setfoods] =  useState([])
    useEffect(()=>{
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setfoods(data))
    },[])




    return [foods]
};

export default useFetch;