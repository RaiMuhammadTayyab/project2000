import React, {useState,useEffect} from 'react';
import styles from  './App.module.css';
import Cards from './Components/Cards/Cards'
import Charts from'./Components/Charts/Charts'
import CountryPicker from'./Components/Countrypicker/Countrypicker'
import Appbar from './Components/Appbar'
import { act } from 'react-dom/test-utils';

const App=()=> {
  const[countryname,setCountryname]=useState("")
const [global,setGlobal]=useState({})
const[data,setData]=useState({})
//const[country,setCountry]=useState(["Confirmed:","Deaths:","Recovered:","latestDate:"])

  useEffect(()=>{
    fetchdata()},[])
    const fetchdata=async()=>{
      const response= await fetch("https://api.covid19api.com/summary")
         .then(res=> res.json())
      
         if (response)
     
      {  setData(response);
        
      /* setCountry({
          Confirmed:response.Global.TotalConfirmed,
          Deaths: response.Global.TotalDeaths,
          Recovered:response.Global.TotalRecovered,
          latestdate:response.Date});*/
          setGlobal({
            Confirmed:response.Global.TotalConfirmed,
            Deaths: response.Global.TotalDeaths,
            Recovered:response.Global.TotalRecovered,
            latestdate:response.Date})
          }
        }

      
      const countryhandler=(name)=>{
        setCountryname(name)
        const country=data.Countries.filter((data)=>(data.Country===name))[0];
      country && setGlobal({

        Confirmed:country.TotalConfirmed,
        Deaths:country.TotalDeaths,
        Recovered:country.TotalRecovered,
         latestdate:country.Date })
        }
        
return (
 <div className={styles.app}> <Appbar/>

<div className={styles.container}>

    <h2 text-transform="uppercase"> {countryname ? 'Country:'+countryname:'Global'}</h2>
    <Cards data={global}/>
    <br/>
    <CountryPicker onChange={countryhandler}/>
   <Charts  Data={global} Country={countryname}/>
  
   </div></div>
   
  );
}

export default App;
