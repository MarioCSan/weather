
const Tiempo = ({data})=>{
    console.log(data)
     return(
        <div>
            {data.location !== undefined && (
                <div>
                    <h3>{data.location.name}</h3>
                    <h3>{data.current.condition.text}</h3>
                    <h4>{data.current.temp_c}</h4>
                </div>
             )}   
           
        </div>
    )
}

export default Tiempo