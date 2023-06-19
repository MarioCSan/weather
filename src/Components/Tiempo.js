
const Tiempo = ({data})=>{
    console.log(data)
     return(
        <div>
           <h3>{data.location.name}</h3>
           <h3>{data.current.condition.text}</h3>
        </div>
    )
}

export default Tiempo