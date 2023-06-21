import { useEffect } from "react";

const Tiempo = ({ data }) => {

  // useEffect = () => {
  //   if (data !== undefined) {
  //     // data.forecast.forecastday = data.forecast.forecastday.shift();
  //   }
  // };
  return (
    <div>
      {data.location !== undefined && (
        <div>
          <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 ">
            <h1 className="text-2xl font-bold">
              Previsión del tiempo en {data.location.name}
            </h1>
            <div className="flex place-content-center">
              <img src={data.current.condition.icon} alt="icon" />
            </div>

            <h3>{data.current.condition.text}</h3>
            <h4>{data.current.temp_c} ºC</h4>
            <h3>{data.location.localtime}</h3>
            <h4>Se sienten como: {data.current.feelslike_c} ºC</h4>
          </div>
          <div className="">
            <h3 className="text-2xl Font-bold"> Próximos días</h3>
            {data.forecast.forecastday.map((item, i) => {
              return (
                <>
                  <div
                    key={item}
                    className="rounded overflow-hidden shadow-lg p-12 m-6 bg-sky-400"
                  >
                    <div className="flex place-content-center">
                      <img src={item.day.condition.icon} alt="icon" />
                    </div>
                    <div className="pt-4">
                      <h3>{data.current.condition.text}</h3>
                    </div>
                    <div className="px-6 p-4">
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
