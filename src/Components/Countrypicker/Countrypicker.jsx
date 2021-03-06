import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'

const CountryPicker=(props)=>{
    const[fechcountry, setcountry]=useState([])
    
   
    useEffect(()=>{
       
        async function fetcheddata (){
          const response= await fetch ("https://api.covid19api.com/summary")
          const data= await response.json()
          const modfied=data.Countries.map(({Country})=>Country)
        /*  const mod={
            Confirmed:data.Global.TotalConfirmed,
            Deaths: data.Global.TotalDeaths,
            Recovered:data.Global.TotalRecovered,
            latestdate:data.Date}
          
           setGlobal(mod) */     
        
        setcountry(modfied)  
        

        }
    fetcheddata()
   
    },[setcountry])
    function countryhandler(event){ props.onChange(event.target.value)}

return(
    <FormControl>
        <NativeSelect Value={props.Value} onChange={countryhandler}>
    <option Value="Global">Global</option>
     {fechcountry.map((country,i)=><option key={i} Value={country}>
       {country}</option>)}
         </NativeSelect>
   
    </FormControl>
)

}
export default CountryPicker;
