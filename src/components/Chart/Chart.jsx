import React, { useState, useEffect } from 'react';
import { dailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
    const [currentDailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await dailyData());
        }
        fetchAPI();
    }, []);

    // creating main line chart
    const lineChart = (
        currentDailyData.length
        ?(
        <Line
            data = {{
                labels: currentDailyData.map(({date}) => date),
                datasets: [{
                    data: currentDailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: currentDailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
        />): null
    );

    // CREATING BAR CHART
    const barChart = (
        confirmed
        ? (
            <Bar
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]

                }}
                options = {{
                    legend: { display: false },
                    title: { display: true , text: `Current Condition in ${country}`},
                }}
            />
        ): null
    )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;