// creating functions to fetch data from api
import React from 'react';
// axios used to make api request
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const response = await axios.get(url);
        return response;
        
    } catch (error) {

    }
}