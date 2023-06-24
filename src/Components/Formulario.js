import { useState, useEffect } from "react";
import Global from "../Global";
import axios from "axios";
import Tiempo from "./Tiempo";

const Formulario = () =>{
    const [ciudad, setCiudad] = useState('')
    const [data, setData] = useState({});
    const [localtime, setLocaltime] = useState('');

    const url = Global.forecast 
    const endUrl = '&days=4&lang=es&aqi=no&alerts=no'


    let bg = ''
    function fetchData(ciudad) {
        axios.get(url+ciudad+endUrl).then((res) => {
            setData(res.data);
            setLocaltime(data.location.localtime.substring(11,16).replace(':',''))
            if(localtime<2100){
                bg = 'bg-sky-200'
              } else {
                bg = 'bg-blue-950'
              }
              console.log(bg)
      
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
 
    // const handleChange = (e) =>{
    //     e.preventDefault();

    //     if([ciudad].includes('')){
    //         // ! Error
    //     } else {
    //     //    fetchData()
    //     }
       
    // }

    useEffect(()=>{
        setData(axios.get(url+"madrid"+endUrl).then((res) => {
            setData(res.data);
            setLocaltime(res.data.location.localtime.substring(11,16).replace(':',''))
            if(localtime > 800 && localtime<2100){
                bg = 'bg-sky-200'
              } else {
                bg = 'bg-blue-950'
              }

          })   )            
    }, [url])

    return(
        
        <div className={bg}>
            <div className="p-10">
                <h1 className='font-extrabold tracking-widest text-2xl text-zinc-800'>Weather</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex place-content-center">
                   
                        <input id='ciudad' placeholder="Ciudad" 
                                className="placeholder:italic md:text-center placeholder:text-slate-400 block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-smv"
                                value={ciudad} onChange={ (e) => setCiudad(e.target.value) } onBlur={handleSubmit}></input>
                    </div>
                    <input
                        type="submit"
                        className="m-4 p-4 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-100 rounded"
                    />
                </form> 
            </div>
            <div className="bg-sky-200">    
                <Tiempo data={data} fondo={bg} />
                
            </div>
        </div>
    )
}

export default Formulario