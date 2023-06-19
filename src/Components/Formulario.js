import { useState, useEffect } from "react";
import Global from "../Global";
import axios from "axios";
import Tiempo from "./Tiempo";

const Formulario = () =>{
    const [ciudad, setCiudad] = useState('')
    const [data, setData] = useState([]);
    const url = Global.url 
    let city = '?q=madrid&lang=es&key='

    
    const key = Global.ApiKey
  
    async function fetchData() {
        axios.get(url+city+key).then((res) => {
            setData(res.data);
          })
        //   .catch(err => {
          
        //   });
      }


  
    const handleSubmit = (e) =>{
        e.preventDefault();

        if([ciudad].includes('')){
            // ! Error
        } else {
           city = city.replace('madrid', ciudad)
           fetchData()
        }
        console.log(data)
    }
 
    const handleChange = (e) =>{
        e.preventDefault();

        if([ciudad].includes('')){
            // ! Error
        } else {
           fetchData()
        }
       
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="ciudad">Ciudad</label>
                    <input id='ciudad' placeholder="Ciudad" value={ciudad} onChange={ (e) => setCiudad(e.target.value) } onBlur={handleSubmit}></input>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                />
            </form> 
            
           <Tiempo data={data} />
        </div>
    )
}

export default Formulario