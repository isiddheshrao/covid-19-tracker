import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

import {fetchData} from './api';

import CoronaImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    // getting data from api
    async componentDidMount() {
        // calling function in api component
        const fetchedData = await fetchData();
        // console.log(fetchedData)
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        // console.log(country);
        // FETCH COUNTRY AND THEN SET STATE
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={CoronaImage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange= {this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}

export default App;