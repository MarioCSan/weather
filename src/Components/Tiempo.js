

const Tiempo = ({ data, fondo }) => {

  return (
    <div className={fondo}>
      {data.location !== undefined && (
        <div className={fondo}>
          {data.location.localtime }
          <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 rounded overflow-hidden shadow-lg bg-cyan-400">
            <h1 className="text-2xl font-bold">
              Previsión del tiempo en {data.location.name}
            </h1>
            <div className="flex place-content-center">
              <img src={data.current.condition.icon} alt="icon" width="64" height="64"/>
            </div>

            <h2 className="font-bold">{data.current.condition.text}</h2>
            <h3>{data.current.temp_c} ºC</h3>
            <h3>{data.location.localtime}</h3>
            <h3>Sensación térmica: {data.current.feelslike_c} ºC</h3>
            <h3>Viento: {data.current.wind_kph} Km/h</h3>
          </div>
         <div className="">
            <h3 className="text-2xl Font-bold"> Próximos días</h3>
            {data.forecast.forecastday.map((item, i) => {
              return (
                <div key={i}>
                  <div
                    className="rounded overflow-hidden shadow-lg p-12 m-6 bg-sky-400"
                  >
                    <div className="flex place-content-center">
                      <img src={item.day.condition.icon} alt="icon" width="64" height="64"/>
                    </div>
                    <div className="pt-4">
                      <h3 className="font-bold">{item.day.condition.text}</h3>
                      <h3>{item.day.maxtemp_c} ºC Máxima</h3>
                      <h3>{item.day.mintemp_c} ºC Minima</h3>

                    </div>
                    <div className="px-6 p-4">
                      <h3>{item.day.maxtemp_c} ºC</h3>
                      <h3>{item.date}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiempo;
