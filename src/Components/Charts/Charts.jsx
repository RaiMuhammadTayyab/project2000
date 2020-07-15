import React, {useEffect,useState} from 'react'
import {Line} from 'react-chartjs-2'
import styles from './Charts.module.css'


const Charts=()=>{

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
}}/>
  ):null )

return (
    <div className={styles.container}>
    {lineChart}
    </div>
)
}

export default Charts