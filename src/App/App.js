import React, { useState } from 'react';
const api = {
  key: "cab754b2aebd70e705b44da72ec29afd",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [localtime, setLocaltime] = useState('');
  const [formattedTime, setFormattedTime] = useState('')

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.base}weather?q=${query}&lang=es&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          formatDate(result.timezone);
          Capitalice(weather.weather[0].description);
          console.log(weather)
        });
    }
  };

  const dateBuilder = (d) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const formatDate = (timezone) => {
    const localTime = new Date().getTime()
    const localOffset = new Date().getTimezoneOffset() * 60000
    const currentUtcTime = localOffset + localTime
    const cityOffset = currentUtcTime + 1000 * timezone
    const cityTime = new Date(cityOffset).toTimeString().split(' ')
    const timeFormatted = cityTime[0].substring(0, 5).replace(":", "")
    setFormattedTime(timeFormatted);
    setLocaltime(cityTime[0])
  }

  const Capitalice = (word) =>{
    const wordCapitaliced = word.charAt(0).toUpperCase() + word.slice(1);
    weather.weather[0].description = wordCapitaliced;
    
  }
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? formattedTime > 800 && formattedTime < 2100
            ? "app"
            : "app warm"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar ciudad"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="date">{localtime}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">
                <p> Sensación termica {Math.round(weather.main.feels_like)}°c</p>
                <p>Viento: {weather.wind.speed} Kmh</p>
             
              </div>
              <div className="weather">
                <h2>{weather.weather[0].description}</h2>
                {/* <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='Icono del tiempo' className='weather'/> */}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
