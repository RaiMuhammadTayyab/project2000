import React, {useEffect,useState} from 'react'
import {Line,Pie,Bar} from 'react-chartjs-2'
import styles from './Charts.module.css'


const Charts=({Data:{Confirmed,Recovered,Deaths}, Country})=>{

const [daily, setdaily] =useState([])

useEffect(()=>{
    async function Chartdata(){
      //  const response= await fetch('https://api.covid19api.com/world?from=2020-01-01T00:00:00Z&to=2020-06-30T00:00:00Z')
 
    const response= await fetch ("https://covid19.mathdro.id/api/daily")
    const jason= await response.json() 
    const modified= jason.map(({confirmed,deaths,reportDate}) =>({
      Confirmed :confirmed.total,
       deaths: deaths.total,
       date: reportDate,}))
    setdaily(modified)
   }

    Chartdata() 
},[])


const lineChart=(
    daily.length
? (<Line 
  data={{
   labels: daily.map(({date})=>date),
   datasets:[{
        data: daily.map(({Confirmed}) =>Confirmed),
          label: 'infected',
          bordercolor: '#3333ff',
          fill: true},
         
          {data: daily.map(({deaths})=>deaths),
          label: 'Deaths',
          bordercolor: 'red',
          backgroundColor: 'rgba(255,0,0,0.5)',
          fill: true
          }]
}}/>):null )
 
const pieChart=(
Country
? (
<Pie
data={{
  labels: ['Infected', 'Recovered','Deaths'],
datasets:[{
  data: [Confirmed,Recovered,Deaths],
labels: 'People',
backgroundColor:[' #3333ff','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
}]}}
options= {{
  legend:{display:true},
  title: {display:true, text:"Current state:- " + Country},
  
}}/>):null)
const barChart=(
  Country
?(<Bar
  data={{
    labels: ['Infected', 'Recovered','Deaths'],
  datasets:[{
    data: [Confirmed,Recovered,Deaths],
  labels: 'People',
  backgroundColor:[' #3333ff','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)']
  }]}}
  options= {{
    legend:{display:false},
    title: {display:true, text:"Current state:- " + Country}

    
  }}/>
 ) : null)
  

return(
 <div className={styles.container} >
   {Country ? pieChart && barChart: lineChart}</div>
     
     
    
)
}

export default Charts