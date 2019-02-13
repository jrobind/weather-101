import React, { Component } from 'react';
import storage from '../utils/storage';
import Loading from '../components/Loading';
import WeatherHeader from '../components/WeatherHeader';
import Forecast from '../components/Forecast';
import UVandPollution from '../components/UVandPollution';
import styles from '../styles/components/DashboardContainer.scss';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentWeather: null,
            forecast: null,
            lat: null,
            lon: null,
            country: '',
            name: ''
        }
    }

    componentDidMount() {
        const { location: { name, country, lat, lon }, forecast } = storage.getStorage('weather');
        console.log(storage.getStorage('weather'))
        const weather = storage.getStorage('weather');
        const placeName = storage.getStorage('placeName');
        const times = ['09:00:00', '15:00:00', '21:00:00'];
   
        // format forecast data for Forecast component i.e. weather data for 9am, 3pm and 9pm
        const formattedForecast = weather.list.filter((day) => {
            const dateToday = new Date();
            const dateToCheck = new Date(day.dt_txt);

            return dateToday.getDate() !== dateToCheck.getDate();

        }).filter((day) => times.includes(day.dt_txt.split(' ')[1]));
    
        this.setState(() => ({
            currentWeather: list[0],
            forecast: formattedForecast.slice(0, formattedForecast.length -1),
            lat,
            lon,
            country,
            name: placeName === name ? name : placeName // check whether placename returned from api matches placename search
        }));
    }

    render() {
        const { currentWeather, country, name, forecast, coord } = this.state;

        if (currentWeather) {
            return (
                <div 
                    className={styles.dashContainer}
                    data-testid = 'dashboard-container'
                >
                    <WeatherHeader 
                        currentWeather={currentWeather}
                        country={country}
                        coord={coord}
                        name={name}
                    /> 
                    <div className={styles.forecastDataWrapper}>
                        <div className={styles.uvPolContainer}>
                            <UVandPollution title='UV' />
                            <UVandPollution title='Pollution' />
                        </div>
                        <Forecast
                            forecast={[currentWeather].concat(forecast)}
                        />
                    </div>
                </div>
            )
        } else {
            return <Loading />;
        }
    }
}

export default DashboardContainer;