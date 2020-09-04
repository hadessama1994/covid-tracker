import React, { useEffect, useState } from 'react';
import {fetchData, fetchAllCountries, fetchDailyData} from './api/api'
import 'fontsource-roboto';
import  {Box, Typography, Link} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Cards from './components/Cards/Cards'
import Countries from './components/Countries/Countries'
import Charts from './components/Chart/Chart'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  
  selectForm: {height: '200px',
  padding: '10px 280px 10px 10px'
}

  
}))


function App() {
  
  const [confirmed, setConfirmed] = useState('')
  const [recovered, setRecovered] = useState('')
  const [deaths, setDeaths] = useState('')
  const [update, setUpdate] = useState('')
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [dailyDate, setDailyDate] = useState([])
  

  async function fetchCovid(){
  const data = await fetchData(country)
  setConfirmed(data.confirmed.value)
  setRecovered(data.recovered.value)
  setDeaths(data.deaths.value)
  setUpdate(data.lastUpdate)
}


async function fetchCountries(props){
   
  setCountries(await fetchAllCountries())
}

  useEffect(()=> {
    fetchCovid()
    fetchCountries()
    
    
  },[country])

  useEffect(()=>{
    const fetchAllDailyData = async () => {
      setDailyDate(await fetchDailyData())     
    }

    fetchAllDailyData()
  },
  [])

  

    const handleChange = (event) => {
      //passed trhrough props on Countries.js
      setCountry(event);
    };

  
  
  return (

    
    
    <>
   <Box m={2} >
    <Grid container>       
    <Grid > 
             <Countries 
              country = {country} 
              countries = {countries}    
              handleChange = {handleChange} /> 

              <Cards 
              confirmed = {confirmed} 
              recovered = {recovered} 
              deaths = {deaths} 
              update = {update}/>
    </Grid>

    
              <Charts dailyDate = {dailyDate}
                      country = {country}
                      confirmed = {confirmed} 
                      recovered = {recovered} 
                      deaths = {deaths} />     
   
  </Grid>
  </Box>
       <br/> <br/> 
    <Typography  align="center" variant='subtitle2'>Created by <Link href="https://github.com/hadessama1994" color="inherit"><b >Eduardo Nicolli</b></Link></Typography>
 </>

  )
}

export default App;
