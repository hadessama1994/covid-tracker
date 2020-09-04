import React from 'react';
import 'fontsource-roboto';
import {Avatar, Box, Button, Container, Typography, Card, CardContent, CardActions} from '@material-ui/core'
import { styled } from '@material-ui/core/styles';
import CountUp from 'react-countup';
import Time from 'react-time'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WarningIcon from '@material-ui/icons/Warning';

// import { Container } from './styles';

//css

const useStyles = makeStyles((theme) => ({
    confirmed: {
          background: 'linear-gradient(45deg, #50dcf2 30%, #7445d9 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          padding: '0 30px 0 20px',
          boxShadow: '0 1px 6px 1px #7445d9',
          
    },
  
    recovered: {
      background: 'linear-gradient(45deg, #66ff6e 30%, #45d9c3 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '0 30px 0 20px',
      boxShadow: '0 1px 6px 1px #45d9c3',
      
  },
  
  deaths: {
    background: 'linear-gradient(45deg, #ff9257 30%, #ff6666 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px 0 20px',
    boxShadow: '0 1px 5px 1px #ff7d66',
    
  },
  
    shadowText: {
      textShadow:  '2px 2px 10px #000'
    }
  
    
  }))

function Cards(props) {

    const classes = useStyles();

  return (
  
  
  <>
  <Card className={classes.confirmed} >
    <CardContent>
      <Typography  color="textSecondary" gutterBottom>
       Confirmed
      </Typography>
      <Typography variant="h4" component="h2"  className={classes.shadowText}>
      <CountUp
        start={0}
        end={props.confirmed}
        duration={0.75}
        separator=" "
        /> <CheckCircleIcon fontSize="small" />
      </Typography>
      
      <Typography color="textSecondary">
        COVID-19 Cases
        </Typography>  
                <br/>
        <Typography  color="textSecondary">
          Last Update: <a/>
        <Time value={props.update} format="MM/DD/YYYY" />
                      
        </Typography>  
                  
    </CardContent>      
  </Card>
  <br />

  

  <Card className={classes.recovered}  >
    <CardContent >
      <Typography  color="textSecondary" gutterBottom>
       Recovered
      </Typography>
      <Typography variant="h4" component="h2"  className={classes.shadowText}>
      <CountUp
        start={0}
        end={props.recovered}
        duration={0.75}
        separator=" "
        /> <FavoriteIcon fontSize="small" />
      
      </Typography>
      <Typography color="textSecondary">
        COVID-19 Cases
        </Typography>
        <br/>
        <Typography  color="textSecondary">
          Last Update: <a/>
        <Time value={props.update} format="MM/DD/YYYY" />
                      
        </Typography>  
    </CardContent>
    
  </Card>
  <br />
  <Card  className={classes.deaths}>
    <CardContent>
      <Typography  color="textSecondary" gutterBottom>
       Deaths
      </Typography>
      <Typography variant="h4" component="h2"  className={classes.shadowText}>
      <CountUp
        start={0}
        end={props.deaths}
        duration={0.75}
        separator=" "
        /> <WarningIcon fontSize="small" />
      </Typography>
      <Typography color="textSecondary">
        Confirmed COVID-19 Cases
        </Typography>
        <br/>
        <Typography  color="textSecondary">
          Last Update: <a/>
        <Time value={props.update} format="MM/DD/YYYY" />
                      
        </Typography>  
    </CardContent>
    
  </Card>
</>
  )
}

export default Cards;