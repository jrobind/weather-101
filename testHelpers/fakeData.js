export const geocodeByAddressData = [{
    address_components: [{
        short_name: 'London'
    }]
}];

export const getLatLngData = {
    lat: 51.7355868,
    lng: -0.12775829999998223
};

export const apiFakeUVData = {
    value: 6
}

export const apiFakeData = {
    current: { 
        condition: { text: 'Sunny', icon: "//cdn.apixu.com/weather/64x64/day/113.png" },
        humidity: 50,
        wind_mph: 3.8,
        temp_c: 10
    },
    location: {
        country: 'Poland',
        name: 'Lodz',
        lat: 51.76,
        lon: 19.46
    },
    forecast: {
        forecastday: [{
            date: '2019-02-24',
            day: {
                condition: { text: "Partly cloudy", icon: "//cdn.apixu.com/weather/64x64/day/116.png" },
                humidity: 40,
                wind_mph: 4,
                maxtemp_c: 8
            }
        }, 
        {
            date: '2019-02-25',
            day: {
                condition: { text: "Moderate rain at times", icon: "//cdn.apixu.com/weather/64x64/day/299.png" },
                humidity: 48,
                wind_mph: 4.5,
                maxtemp_c: 10
            }
        }, 
        {
            date: '2019-02-26',
            day: {
                condition: { text: "Partly cloudy", icon: "//cdn.apixu.com/weather/64x64/day/116.png" },
                humidity: 45,
                wind_mph: 9.4,
                maxtemp_c: 13
            }
        }]
    }
}