export default ({ lat, lng }) => {
   return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=63a86f0f410d1650aed27460d8b457a4`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));
}

export const fetchUVIndex = ({ lat, lon }) => {
   return fetch(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=63a86f0f410d1650aed27460d8b457a4`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));
}