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
            setLocaltime(res.data.location.localtime.substring(11,16).replace(':',''))
            if(res.data.location.localtime.substring(11,16).replace(':','')<2100){
                bg = 'bg-sky-200'
              } else if(localtime>2100) {
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

    function renderDay(){
    
        return (
            <div>
            <div className='p-10'>
                <h1 className='tracking-widest text-5xl md:text-5xl text-zinc-800'>Weather</h1>
            </div>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <div className="flex place-content-center">
                   
                        <input id='ciudad' placeholder="Ciudad" 
                                className="placeholder:italic md:text-center placeholder:text-2xl block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-smv l"
                                value={ciudad} onChange={ (e) => setCiudad(e.target.value) } onBlur={handleSubmit}></input>
                    </div>
                    <input
                        type="submit"
                        className="m-4 p-4 bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-100 rounded"
                    />
                </form> 
            </div>
            <div className=''>    
                <Tiempo data={data} localtime={localtime} />
                
            </div>
        </div>
        )
      } 
      
      function renderNight(){
        
        return (
          <div className="bg-blue-900 text-sky-50 tex-4xl">
            <div className="p-10 bg">
              <h1 className="font-extrabold tracking-widest text-2xl" style={{fontSize: 50}}>
                Weather
              </h1>
            </div>
            <div className="p-10">
              <form onSubmit={handleSubmit}>
                <div className="flex place-content-center">
                  <input
                    id="ciudad"
                    placeholder="Ciudad"
                    className="placeholder:italic md:text-center placeholder:text-slate-400 placeholder:text-xl block bg-white w-1/2 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
                                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-smv text-zinc-900 p-8 "
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    onBlur={handleSubmit}
                    
                  ></input>
                </div>
                <input
                  type="submit"
                  className="m-4 p-4 bg-blue-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-100 rounded w-1/3 text-lg"
                />
              </form>
            </div>
            <div className="bg-blue-900 text-blue-50">
              <Tiempo data={data} localtime={localtime} />
            </div>
          </div>
        );
      } 

    useEffect(()=>{
        setData(
          axios.get(url + "madrid" + endUrl).then((res) => {
            setData(res.data);
            setLocaltime(
              res.data.location.localtime.substring(11, 16).replace(":", "")
            );
          })
        );            
    }, [url])

    return(
        
        <div>
           {localtime < 2100 && localtime > 800 ? renderDay() : renderNight()}
        </div>
    )
}

export default Formulario