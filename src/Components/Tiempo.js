
const Tiempo = ({data})=>{
    console.log(data)
     return(
        <div>
            {data.location !== undefined && (
               <div>
                    <div className="p-10 m-10">
                        <div className="flex place-content-center">
                            <img src={data.current.condition.icon}/>                   
                        </div>
                    
                        <h3>{data.location.name}</h3>
                        <h3>{data.current.condition.text}</h3>
                        <h4>{data.current.temp_c}</h4>
                        </div>
                    <div>
                        {data.forecast.forecastday.map((item)=>{
                            return(
                                <div>
                                    <h3>
                                        {item.day.maxtemp_c}
                                    </h3>
                                    <h3>
                                        {item.date}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                </div> 
            )}   
           
        </div>
    )
}

export default Tiempo