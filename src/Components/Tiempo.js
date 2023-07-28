

const Tiempo = ({ data, localtime }) => {

  const hora = localtime.slice(0,2) + ':' +localtime.slice(2)
  function renderDay(){
    return (
      <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 rounded-lg overflow-hidden shadow-lg bg-sky-400 ">
      <h1 className="text-2xl font-bold">
        Previsión del tiempo en {data.location.name}
      </h1>
      <div className="flex place-content-center">
        <img src={data.current.condition.icon} alt="icon" width="64" height="64"/>
      </div>

      <h2 className="font-bold">{data.current.condition.text}</h2>
      <h3>{data.current.temp_c} ºC</h3>
      <h3>Hora local: {hora}</h3>
      <h3>Sensación térmica: {data.current.feelslike_c} ºC</h3>
      <h3>Viento: {data.current.wind_kph} Km/h</h3>
      <h4>Humedad: {data.current.humidity}%</h4>
    </div>
    )
  } 
  
  function renderNight(){
    
    return (
      <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 rounded-lg overflow-hidden shadow-lg bg-indigo-700 text-sky-50">
      <h1 className="text-2xl font-bold">
        Previsión del tiempo en {data.location.name}
      </h1>
      <div className="flex place-content-center">
        <img src={data.current.condition.icon} alt="icon" width="120" height="120"/>
      </div>

      <h2 className="font-bold">{data.current.condition.text}</h2>
      <h3>{data.current.temp_c} ºC</h3>
      <h3>Hora local: {hora}</h3>
      <h3>Sensación térmica: {data.current.feelslike_c} ºC</h3>
      <h3>Viento: {data.current.wind_kph} Km/h</h3>
    </div>
    )
  } 

  return (
    <div className="pb-10">
      {data.location !== undefined && (
        <div>
          {localtime < 2100 && localtime > 800 ? renderDay() : renderNight()}
        
        </div>
      )}
    </div>
  );
};

export default Tiempo;
