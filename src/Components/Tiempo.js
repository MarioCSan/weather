const Tiempo = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.location !== undefined && (
        <div>
          <div className="p-10 m-10 grid grid-cols-1 gap-4">
            <h3 className="font-bold ">
              Previsión del tiempo en {data.location.name}
            </h3>
            <div className="flex place-content-center">
              <img src={data.current.condition.icon} alt="icon" />
            </div>

            <h3>{data.current.condition.text}</h3>
            <h4>{data.current.temp_c} ºC</h4>
          </div>
          <div className="">
            <h3 className="font-bold"> Próximos 3 días</h3>
            {data.forecast.forecastday.map((item) => {
              return (
                <>
                  <div className="rounded overflow-hidden shadow-lg p-12 m-6 bg-sky-400">
                    <div className="flex place-content-center">
                      <img src={item.day.condition.icon} alt="icon" />
                    </div>
                    <div className="pt-4">
                      <h3>{data.current.condition.text}</h3>
                    </div>
                    <div class="px-6 p-4">
                      <h3>{item.day.maxtemp_c} ºC</h3>
                      <h3>{item.date}</h3>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiempo;
