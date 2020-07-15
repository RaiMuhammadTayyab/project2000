import React, {useState,useEffect} from 'react';
import styles from  './App.module.css';
import Cards from './Components/Cards/Cards'
import Charts from'./Components/Charts/Charts'
import CountryPicker from'./Components/Countrypicker/Countrypicker'
/*const Countrydata={
  Confirmed:0,
  Deaths:0,
  Recovered:0,
  latestdate:0}*/


const App=()=> {
const [result,setresult]=useState({})
const[pkr,setpkr]=useState({})
const[count,setcount]=useState("")
//const[Country,setCountry]=useState([])

  useEffect(()=>{
    async function fetchdata(){
      const response= await fetch ("https://api.covid19api.com/summary")
        
      const data= await response.json()
      
      console.log(count)
    const Con1=data.Countries.findIndex(
        function(post,Index){
          if(post.Country=='Pakistan')

          return true;
        
        })
        console.log(Con1)
     /* const refineddata={
        Deaths: data.Countries.map(({TotalDeaths})=>TotalDeaths),
        Confirmed:data.Countries.map(({TotalConfirmed})=>TotalConfirmed),
        Recovered:data.Countries.map(({TotalRecovered})=>TotalRecovered),
        latestdate:data.Date }
    setCountry(refineddata)*/
  
     const modified={
          Confirmed:data.Global.TotalConfirmed,
             Deaths: data.Global.TotalDeaths,
             Recovered:data.Global.TotalRecovered,
             latestdate:data.Date}  
    const Countrydata={
      Confirmed:data.Countries[Con1].TotalConfirmed,
      Deaths:data.Countries[Con1].TotalDeaths,
      Recovered:data.Countries[Con1].TotalRecovered,
       latestdate:data.Countries[Con1].Date,
      }
     
      setresult (modified)
      setpkr(Countrydata)   
    }
  
  fetchdata()
  },[])
      // console.log(count) 
 //const con=()=>{
  // for (var i=0;i<Country.length;i++)
   //if (Country[i].count){
console.log(pkr)

 function countryhandler(newvalue){
   setcount(newvalue)}
   
return (
    <div className={styles.container} >
    <h2 >GLobal</h2>
    <Cards data={result}/>
    
    <h2 >Countries</h2>
    
   <Cards data={pkr}/>
    <CountryPicker value={count} onChange={countryhandler}/>
   <Charts/>
  
   </div>
  );
}


export default App;
