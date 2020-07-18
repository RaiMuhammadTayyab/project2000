import React from 'react';
import styles from './Cards.module.css';
import {Card,CardContent,Typography,Grid,CircularProgress} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'




const Cards=({data:{Confirmed,Deaths,Recovered,latestdate}}) => {
  if (!Confirmed)
  {return <CircularProgress color="secondary" />}
  
  return (<div className = {styles.container}>
    <Grid container spacing={4} justify= "center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.Card,styles.infected)}>
            <CardContent>
  <Typography variant="h6"color="textSecondary" gutterBottom>Infected </Typography>
      <Typography variant="h6">
 <CountUp start ={0} end ={Confirmed} duration={3} separator="," />
 </Typography> 
      <Typography color="textSecondary">{new Date(latestdate).toDateString()} </Typography>   
      <Typography variant="body2">Number of Active Cases </Typography>   
            </CardContent>
            </Grid>

   <Grid item component={Card}xs={12} md={3} className={cx(styles.Card,styles.Recovered)}>
            <CardContent>
  <Typography variant="h6"color="textSecondary" gutterBottom> Recovered</Typography>
      <Typography variant="h5"> 
      <CountUp start ={0} end ={Recovered} duration={3} separator="," />
     </Typography> 
  <Typography color="textSecondary"> {new Date(latestdate).toDateString()}</Typography>   
      <Typography variant="body2">Number of Recovered Cases </Typography>   
            </CardContent>
         </Grid>

        <Grid item component={Card}xs={12} md={3} className={cx(styles.Card,styles.Deaths)}>
            <CardContent>
  <Typography variant="h6"color="textSecondary" gutterBottom> Deaths </Typography>
  <Typography variant="h5">
      <CountUp start ={0} end ={Deaths} duration={2.5} separator="," />
      </Typography> 
      <Typography color="textSecondary">{new Date(latestdate).toDateString()}</Typography>   
      <Typography variant="body2">Number of Deaths </Typography>   
            </CardContent>
       </Grid>



    </Grid>
    
  
     
    </div>
  );
}


export default Cards;
