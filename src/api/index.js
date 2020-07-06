// creating functions to fetch data from api
import React from 'react';
// axios used to make api request
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return {confirmed, recovered, deaths, lastUpdate };

    } catch (error) {

    }
};

export const dailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    }catch (error){

    }
};