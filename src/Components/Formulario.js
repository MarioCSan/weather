import { useState, useEffect } from "react";
import Global from "../Global";
import axios from "axios";
import Tiempo from "./Tiempo";

const Formulario = () =>{
    const [ciudad, setCiudad] = useState('')
    const [data, setData] = useState({});
    const url = Global.forecast 
    const endUrl = '&days=3&lang=es&aqi=no&alerts=no'


    const key = Global.ApiKey
  
    async function fetchData(ciudad) {
        axios.get(url+ciudad+endUrl).then((res) => {
            setData(res.data);
          })
          .catch(err => {
            console.log('')
          });
      }


  
    const handleSubmit = (e) =>{
        e.preventDefault();

        if([ciudad].includes('')){
            // ! Error
        } else {
           fetchData(ciudad)
        }

    }
 
    const handleChange = (e) =>{
        e.preventDefault();

        if([ciudad].includes('')){
            // ! Error
        } else {
        //    fetchData()
        }
       
    }

    useEffect(()=>{

        fetchData('madrid')
    },[])

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex place-content-center">
                   
                        <input id='ciudad' placeholder="Ciudad" 
                                className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/5 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-smv items-center"
                                value={ciudad} onChange={ (e) => setCiudad(e.target.value) } onBlur={handleSubmit}></input>
                    </div>
                    <input
                        type="submit"
                        className="m-4 p-4 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-100 rounded"
                    />
                </form> 
            </div>
            <div>    
                <Tiempo data={data} />
                
            </div>
        </div>
    )
}

export default Formulario