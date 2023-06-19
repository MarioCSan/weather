import { useState, useEffect } from "react";
import Global from "../Global";


const Tiempo = ()=>{
    const [data, setData] = useState(null);
    const url = Global.url + '?q=madrid&lang=es&key='
    const key = Global.ApiKey
  
  
    useEffect(()=>{
      fetch(url+key)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    })

    return(
        <div>
            <form>
                <div>
                    <label></label>
                    <input></input>
                </div>
            </form> 
        </div>
    )
}

export default Tiempo